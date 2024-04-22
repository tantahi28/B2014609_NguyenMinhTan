<template>
    <div>
      <section class="header relative pt-5 pb-16 items-center flex justify-center my-5">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-bordered table-hover">
                  <thead class="bg-primary text-white">
                    <tr>
                      <th scope="col" class="px-4 py-2">
                        Mã
                      </th>
                      <th scope="col" class="px-4 py-2">
                        Hàng hóa
                      </th>
                      <th scope="col" class="px-4 py-2">
                        Tổng tiền
                      </th>
                      <th scope="col" class="px-4 py-2">
                        Trạng thái
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="order in orders" :key="order._id" class="bg-white border-b">
                      <td class="px-4 py-2 font-medium">{{ order._id }}</td>
                      <td class="px-4 py-2">
                        <template v-for="(detail, index) in order.details">
                          <div v-if="index < 2">
                            {{ detail.book.title }} (x{{ detail.quantity }})
                          </div>
                          <div v-else-if="index === 2">
                            ...
                          </div>
                        </template>
                      </td>
                      <td class="px-4 py-2">{{ calculateTotal(order.details) }}</td>
                      <td class="px-4 py-2">{{ order.status }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
        orders: [],
        orderService: new OrderService(),
      };
    },
    methods: {
      async getOrders() {
        try {
          const response = await this.orderService.getAll();
          this.orders = response.data.docs;
        } catch (error) {
          console.error("Error fetching orders:", error);
        }
      },
      calculateTotal(details) {
        return details.reduce((total, detail) => total + (detail.quantity * detail.book.price), 0);
      },
    },
    mounted() {
      this.getOrders();
    },
  };
  </script>
  