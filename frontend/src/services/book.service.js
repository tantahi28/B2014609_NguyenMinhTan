import createApiClient from "./api.service";
import { useAuthStore } from '../stores/auth.store'

class BookService {
  constructor(baseUrl = "/api/books") {
      this.api = createApiClient(baseUrl);
      this.authStore = useAuthStore()
  }
  
  async getAll({ page = 1, perPage = 12, q = '' }) {
    let rs = await this.api.get('/', {
      params: { page, perPage, q },
    })
    console.log(rs)
    return rs.data
  }

  async getOne(id) {
    return (await this.api.get(`/${id}`)).data
  }
  async createOne(data) {
    return (
      await this.api.post('/', data, {
        headers: {
          Authorization: this.authStore.token,
        },
      })
    ).data
  }
  async updateOne(id, data) {
    return (
      await this.api.put(`/${id}`, data, {
        headers: {
          Authorization: this.authStore.token,
        },
      })
    ).data
  }
  async deleteOne(id) {
    return (
      await this.api.delete(`/${id}`, {
        headers: {
          Authorization: this.authStore.token,
        },
      })
    ).data
  }
}

export default BookService
