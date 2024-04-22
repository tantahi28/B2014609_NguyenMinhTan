import createApiClient from "./api.service";
import { useAuthStore } from '../stores/auth.store'

class OrderService {

  constructor(baseUrl = "/api/orders") {
      this.api = createApiClient(baseUrl);
      this.authStore = useAuthStore()
  }

  async getAll() {
    return (
      await this.api.get('/myOrders', {
        headers: {
          Authorization: this.authStore.token,
        },
      })
    ).data
  }
  async createOne(data) {
    return (
      await this.api.post('/createOne', data, {
        headers: {
          Authorization: this.authStore.token,
        },
      })
    ).data
  }
  async deleteOne(id) {
    return (
      await this.api.delete(`/deleteOne/${id}`, {
        headers: {
          Authorization: this.authStore.token,
        },
      })
    ).data
  }
  async getOne(id) {
    return (
      await this.api.get(`/getOne/${id}`, {
        headers: {
          Authorization: this.authStore.token,
        },
      })
    ).data
  }
  async updateOne(id, data) {
    return (
      await this.api.put(`/${id}`,data, {
        headers: {
          Authorization: this.authStore.token,
        },
      })
    ).data
  }
  async buyFromCart() {
    return (
      await this.api.get('/buyFromCart', {
        headers: {
          Authorization: this.authStore.token,
        },
      })
    ).data
  }
}

export default OrderService
