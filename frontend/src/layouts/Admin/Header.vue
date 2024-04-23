<template>
    <header>
      <!-- Navigation -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src="https://img.freepik.com/free-vector/gradient-bookstore-logo_23-2149332421.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1713657600&semt=ais" style="height: auto; width: 50px;" class="img-fluid rounded mr-2" alt="...">
          </a>
          <button class="navbar-toggler" type="button" @click="toggleNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" :class="{ 'show': navbarOpen }" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <router-link to="/admin/books" class="nav-link">Danh Sách Sách</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin/orders" class="nav-link">Danh Sách Đơn Hàng</router-link>
              </li>

            </ul>
            <form @submit.prevent="searchBookHandler" class="mx-2 form-inline">
              <input class="form-control" v-model="searchQuery" placeholder="Tìm kiếm..." type="text" name="q" required>
              <button type="submit" class="btn btn-outline-dark">Tìm</button>
            </form>
            <div v-if="authStore.user" class="dropdown">
              <button type="button" class="btn dropdown-toggle" @click="toggleUserDropdown">
                <img :src="authStore.user.image" style="height: auto; width: 50px;" alt="" class="img-fluid rounded-circle">
                Chào {{ authStore?.user?.username }}
              </button>
              <div class="dropdown-menu" :class="{ 'show': userDropdownOpen }">
                <div class="dropdown-divider"></div>
                <a type="button" @click="logout()" class="dropdown-item">Đăng xuất</a>
              </div>
            </div>
            <router-link v-else to="/admin/login" class="mx-2 nav-link">
              Đăng nhập
            </router-link>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  import { useAuthStore } from '@/stores/auth.store'
  import { useCartStore } from '@/stores/cart.store'
  import CartService from '@/services/cart.service'
  import AuthService from '@/services/auth.service'
  import router from '@/router';
  
  export default {
    data() {
      return {
        navbarOpen: false,
        dropdownOpen: false,
        userDropdownOpen: false,
        authStore: useAuthStore(),
        cartStore: useCartStore(),
        cartService: new CartService(),
        authService: new AuthService(),
        searchQuery: '',
      };
    },
    methods: {
      toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
      },
      toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
      },
      toggleUserDropdown() {
        this.userDropdownOpen = !this.userDropdownOpen;
      },
      closeDropdowns() {
        this.dropdownOpen = false;
        this.userDropdownOpen = false;
      },
      logout() {
        this.authService.logout();
      },
      async searchBookHandler() {
        console.log(this.searchQuery);
        await router.push({ path: '/search', query: { q: this.searchQuery } });
      }
    },
    mounted() {
      this.cartService.get();
    }
  };
  </script>
  
  <style>
  /* Add your custom styles here */
  </style>
  