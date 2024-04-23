<template>
    <div class="card" :class="[color === 'light' ? 'bg-light' : 'bg-dark']">
      <div class="card-header">
        <div class="d-flex justify-content-between align-items-center">
          <h3 class="font-weight-bold mb-0">
            Sách
            <router-link to="/admin/books/create">
              <button class="btn btn-success ml-3">Tạo</button>
            </router-link>
          </h3>
        </div>
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Mã</th>
              <th scope="col">Tên</th>
              <th scope="col">Giá</th>
              <th scope="col">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="book in books" :key="book._id">
              <td>{{ book._id }}</td>
              <td>{{ book.title }}</td>
              <td>{{ book.price }} vnđ</td>
              <td>
                <router-link :to="`/admin/books/${book._id}`" class="btn btn-primary btn-sm mr-2">
                    <i class="fa-solid fa-pen-to-square"></i>
                </router-link>
                <button @click="deleteBook(book._id)" class="btn btn-danger btn-sm">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import BookService from '@/services/book.service'
  
  export default {
    data() {
      return {
        bookService: new BookService(),
        books: []
      };
    },
    props: {
      color: {
        default: "light",
        validator: function (value) {
          return ["light", "dark"].indexOf(value) !== -1;
        },
      },
    },
    methods: {
      async getBooks(q) {
        this.books = (await this.bookService.getAll({ q, perPage: 999 }))?.data?.docs
      },
      async refresh() {
        this.getBooks()
      },
      async deleteBook(id) {
        if (!confirm('Bạn muốn xóa sách này?')) return
        await this.bookService.deleteOne(id)
        this.refresh()
      },
    },
    mounted() {
      this.getBooks()
    }
  };
  </script>
  
  <style>
  /* Custom styles */
  </style>
  