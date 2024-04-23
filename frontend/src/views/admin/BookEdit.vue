<template>
    <div class="card mt-5">
      <div class="card-header bg-primary text-white">
        <h3 class="font-weight-bold text-lg text-center">Sửa sách: {{ this.$route.params.id }}</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="updateBook">
          <div class="form-group">
            <label for="name" class="font-weight-bold">Tên</label>
            <input type="text" class="form-control" id="name" v-model="book.title" />
          </div>
          <div class="form-group">
            <label for="price" class="font-weight-bold">Giá</label>
            <input type="text" class="form-control" id="price" v-model="book.price" />
          </div>
          <div class="form-group">
            <label for="image" class="font-weight-bold">Link Ảnh</label>
            <input type="text" class="form-control" id="image" v-model="book.image" />
          </div>
          <button type="submit" class="btn btn-success">Lưu</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import BookService from "@/services/book.service"
  
  export default {
    data() {
      return {
        book: {
          name: '',
          price: '',
          image: '',
        },
        bookService: new BookService(),
      }
    },
    methods: {
      async getBook() {
        this.book = (await this.bookService.getOne(this.$route.params.id))?.data?.doc
      },
      async updateBook() {
        let rs = await this.bookService.updateOne(this.$route.params.id, this.book)
        if(rs.status == 'success')
          this.$router.push('/admin/books')
      },
    },
    mounted() {
      this.getBook()
    }
  };
  </script>
  