<template>
    <div>
  
      <section class="header relative pt-16 items-center flex h-96 max-h-860-px px-20 flex justify-center my-16">
  
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-bordered table-hover">
                  <thead class="text-xs text-white bg-emerald-500">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Tên Sách
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Giá
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Số lượng
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="detail in cartStore.details" :key="detail.book._id"
                      class="bg-white border-b">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {{ detail.book.name }}
                      </th>
                      <td class="px-6 py-4">
                        {{ detail.book.price }}
                      </td>
                      <td class="px-6 py-4">
                        {{ detail.quantity }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button
                class="btn btn-success btn-lg mt-4"
                @click="buyFromCart()">
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
  
      </section>
  
    </div>
  </template>
  
  <script>
  import { useCartStore } from '@/stores/cart.store'
  import OrderService from '@/services/order.service'
  
  export default {
    data() {
      return {
        cartStore: useCartStore(),
        orderService: new OrderService(),
      };
    },
    methods: {
      async buyFromCart() {
        let data = await this.orderService.buyFromCart()
        if (data.status == 'success') {
          this.$router.push('/')
        }
      }
    }
  };
  </script>
  