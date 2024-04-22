<template>
    <div>
      <section class="block relative z-1 bg-blueGray-600">
        <div class="container mx-auto">
          <div class="justify-center flex flex-wrap">
            <div class="w-full lg:w-12/12 px-4 mt-6 pb-16">
              <div class="row flex flex-wrap">
                <BookCard v-for="book in books" :key="book._id" :book="book" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer-component />
    </div>
  </template>
  
  <script>
  import BookService from "@/services/book.service";
  import CartService from "@/services/cart.service";
  import AuthService from "@/services/auth.service";
  import { useAuthStore } from "../stores/auth.store";
  import BookCard from "@/components/BookCard.vue";
  
  export default {
    components: {
      BookCard, // Đảm bảo rằng bạn đã khai báo component BookCard ở đây
    },
    data() {
      return {
        books: [],
        authStore: useAuthStore(),
        bookService: new BookService(),
        authService: new AuthService(),
        cartService: new CartService(),
        searchText: "",
      };
    },
    methods: {
      async getBooks(q) {
        this.books = (await this.bookService.getAll({ q, perPage: 999 }))?.data
          ?.docs;
      },
      async addBookToCart(bookId) {
        await this.cartService.addBookToCart(bookId);
      },
      async searchBookHandler() {
        console.log(this.searchText);
        this.getBooks(this.searchText);
      },
    },
    mounted() {
      this.getBooks();
      // this.test()
    },
  };
  </script>
