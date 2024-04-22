<template>
    <div class="col-12 col-md-6 col-lg-4 mb-3">
      <div class="card h-100">
        <!-- Sale badge-->
        <!-- <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div> -->
        <!-- Book image-->
        <!-- <router-link :to="{ name: 'Product', params: { id: book.id } }"> -->
        <img class="card-img-top" :src="book.image" alt="Book Image" />
        <!-- </router-link> -->
        <!-- Book details-->
        <div class="card-body p-2">
          <div class="text-center">
            <!-- Book name-->
            <h5 class="fw-bolder">{{ book.title }}</h5>
            <h5 class="text-info">{{ book.author }}</h5>
            <!-- Book price-->
            <h3 class='text-danger'>{{ book.price }} VNĐ</h3>
          </div>
        </div>
        <!-- Book actions-->
        <div class="card-footer px-4 pb-4 pt-0 border-top-0 bg-transparent">
          <div class="text-center">
            <!-- Remove the unnecessary router-link wrapping -->
            <button class="btn btn-outline-success mt-auto" @click.prevent="addBookToCart(book._id)">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // Import necessary services
  import CartService from "@/services/cart.service";
  
  export default {
    props: {
      book: Object // Assume that book is passed as a prop
    },
    methods: {
      async addBookToCart(bookId) {
        try {
          // Instantiate CartService
          const cartService = new CartService();
          // Call addBookToCart method from CartService
          await cartService.addBookToCart(bookId);
          // Optionally, you can add a message or update UI to reflect the addition
        } catch (error) {
          // Handle errors if necessary
          console.error("Error adding book to cart:", error);
        }
      },
    }
  };
  </script>
  