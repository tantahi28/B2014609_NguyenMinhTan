<template>
    <div class="container mt-5">
      <div class="card">
        <div class="card-header bg-primary text-white">
          <h3 class="font-semibold text-lg">
            Đơn hàng
            <!-- <router-link to="/admin/orders/create" class="float-end">
              <button class="btn btn-success">Tạo</button>
            </router-link> -->
          </h3>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered table-hover">
              <thead class="table-dark">
                <tr>
                  <th scope="col">Mã</th>
                  <th scope="col">Sản phẩm</th>
                  <th scope="col">Giá</th>
                  <th scope="col">Trạng thái</th>
                  <th scope="col">Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="order in orders" :key="order._id">
                  <td>{{ order._id }}</td>
                  <td>
                    <div v-if="order.details">
                      <div v-for="(detail, index) in order.details" :key="index">
                        {{ truncate(detail?.book?.title, 25) }}x{{ detail?.quantity }}
                      </div>
                      <div v-if="order.details.length > 2">
                        ...
                      </div>
                    </div>
                  </td>
                  <td>
                    {{ calculateTotalPrice(order.details) }} vnđ
                  </td>
                  <td>{{ order.status }}</td>
                  <td>
                    <div v-if="order.status != 'Đã hủy'">
                      <button v-if="order.status == 'Chờ duyệt'" class="btn btn-success" @click="acceptOrder(order._id, order)">
                        Duyệt
                      </button>
                      <button v-if="order.status == 'Đã duyệt'" class="btn btn-primary" @click="shippedOrder(order._id, order)">
                        Giao hàng
                      </button>
                      <button class="btn btn-danger" @click="cancelOrder(order._id, order)">
                        Hủy
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
import OrderService from '@/services/order.service'
  
export default {
  data() {
    return {
      orderService: new OrderService(),
      orders: []
    };
  },
  props: {
    color: {
      default: "light",
      validator: function (value) {
        // The value must match one of these strings
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  },
  methods: {
    async getOrders() {
        try {
          const response = await this.orderService.getAllOrder();
          console.error(response);
          this.orders = response.data.docs;
        } catch (error) {
          console.error("Error fetching orders:", error);
        }
      },
    async acceptOrder(id, data) {
      data.status = 'Đã duyệt'
      await this.orderService.updateOne(id, data)
      this.refresh()
    },
    async shippedOrder(id, data) {
      data.status = 'Giao hàng thành công'
      await this.orderService.updateOne(id, data)
      this.refresh()
    },
    async cancelOrder(id, data) {
      data.status = 'Đã hủy'
      await this.orderService.updateOne(id, data)
      this.refresh()
    },
    async refresh() {
      this.getOrders()
    },
    async deleteOrder(id) {
      if (!confirm('Bạn muốn xóa sách này?')) return
      await this.orderService.deleteOne(id)
      this.refresh()
    },
    calculateTotalPrice(details) { 
      if (!details) return 0;
      return details.reduce((total, detail) => total + (detail.quantity * detail.book.price), 0);
      console.log(order.details)
    },
    truncate(str, n) {
      return (str && str.length > n) ? str.slice(0, n - 1) + '…' : str;
    }
  },
  mounted() {
    this.getOrders()
  }
};
</script>
