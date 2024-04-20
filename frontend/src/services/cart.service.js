import createApiClient from "./api.service";

import { useAuthStore } from '../stores/auth.store'
import { useCartStore } from '../stores/cart.store'

class CartService {
  constructor(baseUrl = "/api/cart") {
      this.api = createApiClient(baseUrl);
      this.authStore = useAuthStore()
      this.cartStore = useCartStore()
  }
  
  async get() {
    let rs = await this.api.get('/', {
      headers: {
        Authorization: this.authStore.token,
      },
    })
    console.log(rs)
    this.cartStore.details = rs.data.data.cart
    return rs.data
  }
  async delete() {
    let rs = await this.api.delete('/delete', {
      headers: {
        Authorization: this.authStore.token,
      },
    })
    this.refresh()
    return rs.data
  }
  async addBookToCart(bookId) {
    let rs = await this.api.post(
      `/${bookId}`,
      {},
      {
        headers: {
          Authorization: this.authStore.token,
        },
      }
    )
    this.refresh()
    return rs.data
  }
  async updateBookInCart(data) {
    let rs = await this.api.put(`/updateBookInCart`, data, {
      headers: {
        Authorization: this.authStore.token,
      },
    })
    this.refresh()
    return rs.data
  }
  async deleteBookFromCart(bookId) {
    let rs = (
      await this.api.delete(`/${bookId}`, {
        headers: {
          Authorization: this.authStore.token,
        },
      })
    )
    this.refresh()
    return rs.data
  }
  async refresh() {
    this.get()
  }
}

export default CartService
