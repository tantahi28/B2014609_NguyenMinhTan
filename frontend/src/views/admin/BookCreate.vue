<template>
    <div class="container mt-4">
      <div class="card shadow">
        <div class="card-header bg-light">
          <div class="d-flex justify-content-between align-items-center">
            <h6 class="text-primary mb-0 font-weight-bold">Tạo sách</h6>
            <button
              class="btn btn-success btn-sm"
              @click="createBook()">
              Lưu
            </button>
          </div>
        </div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label class="font-weight-bold" for="bookName">Tên</label>
              <input
                type="text"
                class="form-control"
                id="bookName"
                v-model="book.title"
              />
            </div>
            <div class="form-group">
                <label class="font-weight-bold" for="bookName">Tác giả</label>
                <input
                  type="text"
                  class="form-control"
                  id="bookName"
                  v-model="book.author"
                />
              </div>
            <div class="form-group">
              <label class="font-weight-bold" for="bookPrice">Giá</label>
              <input
                type="text"
                class="form-control"
                id="bookPrice"
                v-model="book.price"
              />
            </div>
            <div class="form-group">
              <label class="font-weight-bold" for="bookImage">Link Ảnh</label>
              <input
                type="text"
                class="form-control"
                id="bookImage"
                v-model="book.image"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import BookService from "@/services/book.service";
  
  export default {
    data() {
      return {
        book: {
          title: "",
          author: "",
          price: "",
          image: "",
        },
        bookService: new BookService(),
      };
    },
    methods: {
      async createBook() {
        let rs = await this.bookService.createOne(this.book);
        if (rs.status == "success") this.$router.push("/admin/books");
      },
    },
    mounted() {},
  };
  </script>
  