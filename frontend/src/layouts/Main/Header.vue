<template>
    <header>
      <!-- Navigation -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="/">
            <!-- <img src="/img/logo.png" style="height: auto; width: 100px;" class="img-fluid rounded mr-2" alt="..."> -->
          </a>
          <button class="navbar-toggler" type="button" @click="toggleNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" :class="{ 'show': navbarOpen }" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Trang chủ</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">Giới thiệu</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="#" @click="toggleDropdown" id="navbarDropdown" role="button" aria-haspopup="true" :aria-expanded="navbarOpen">
                  Sản phẩm
                </a>
                <div class="dropdown-menu" :class="{ 'show': dropdownOpen }" aria-labelledby="navbarDropdown">
                  <router-link v-for="cat in categories" :key="cat.id" :to="'/category?catId=' + cat.id" class="dropdown-item">Danh mục: {{ cat.name }}</router-link>
                </div>
              </li>
            </ul>
            <form @submit.prevent="search" class="mx-2 form-inline">
              <input class="form-control" v-model="searchQuery" placeholder="Tìm kiếm..." type="text" name="q" required>
              <button type="submit" class="btn btn-outline-dark">Tìm</button>

            </form>
            <router-link to="/cart" class="my-2 my-lg-0">
              <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">
                <i class="bi-cart-fill"></i> Giỏ hàng ({{ cartStore.details?.reduce((p, c) => { return p + c.quantity }, 0) ?? 0 }})
              </button>
            </router-link>
            <div v-if="authStore.user" class="dropdown">
                <router-link to="/orders">
                    <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">
                      Đơn hàng
                    </button>
                  </router-link>
              <button type="button" class="btn dropdown-toggle" @click="toggleUserDropdown">
                <img :src="authStore.user.image" style="height: auto; width: 50px;" alt="" class="img-fluid rounded-circle">
                Chào {{ authStore?.user?.username }}
              </button>
              <div class="dropdown-menu" :class="{ 'show': userDropdownOpen }">
                <div class="dropdown-divider"></div>
                <a type="button" @click="logout()" class="dropdown-item">Đăng xuất</a>
              </div>
            </div>
            <router-link v-else to="/auth/login" class="mx-2">
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
      search() {
        // Implement your search logic here
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
  