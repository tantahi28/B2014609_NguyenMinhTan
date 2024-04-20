    import createApiClient from "./api.service";
    import { useAuthStore } from '../stores/auth.store'
    import CartService from './cart.service'

    class AuthService {
    constructor(baseUrl = "/api/auth") {
        this.api = createApiClient(baseUrl);
        this.authStore = useAuthStore()
        this.cartService = new CartService()
        if (this.authStore.token && !this.authStore.user) {
            this._tryLoginWithToken()
        }
    }

    async register(data) {
        let rs = await this.api.post('/register', data)
        this.authStore.setToken(rs.data.token)
        this.authStore.user = rs.data.data.user
        this.cartService.refresh()
        return rs.data
    }

    async login(data) {
        let rs = await this.api.post('/login', data)
        // console.log(rs.data.token);
        this.authStore.setToken(rs.data.token)
        this.authStore.user = rs.data.data.user
        this.cartService.refresh()
        return rs.data
    }

    async logout() {
        this.authStore.setToken(null)
        this.authStore.user = null
    }

    async _tryLoginWithToken() {
        let rs = await this.api.get('/getMe', {
        headers: {
            Authorization: this.authStore.token,
        },
        })
        if (rs.data.status != 'success') {
        this.authStore.setToken(null)
        return
        }
        if (window.location.pathname.startsWith('/admin') && rs?.data?.data?.user?.role != 'admin') {
        this.authStore.setToken(null)
        return
        }
        this.authStore.user = rs.data.data.user
        this.cartService.refresh()
        return
    }
    }

    export default AuthService
