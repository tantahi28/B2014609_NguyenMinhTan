<template>
    <header>
      <!-- Navigation -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="/">
            <!-- <img src="/img/logo.png" style="height: auto; width: 100px;" class="img-fluid rounded mr-2" alt="..."> -->
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Trang chủ</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">Giới thiệu</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Sản phẩm
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <router-link v-for="cat in categories" :key="cat.id" :to="'/category?catId=' + cat.id" class="dropdown-item">Danh mục: {{ cat.name }}</router-link>
                </div>
              </li>
            </ul>
            <form @submit.prevent="search" class="mx-2 form-inline">
              <input class="form-control" v-model="searchQuery" placeholder="Tìm kiếm..." type="text" name="q" required>
              <button type="submit" class="btn btn-outline-dark"><i class="fa fa-search"></i></button>
            </form>
  
            <router-link to="/cart" class="my-2 my-lg-0">
              <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">
                <i class="bi-cart-fill"></i> Giỏ hàng
                <span class="badge bg-dark text-white rounded-pill">{{ count || 0 }}</span>
              </button>
            </router-link>
            <div v-if="user" class="dropdown">
              <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
                <img :src="user.image" style="height: auto; width: 50px;" alt=" " class="img-fluid rounded-circle">
                {{ user.firstname }}
              </button>
              <div class="dropdown-menu">
                <router-link to="/edit" class="dropdown-item">Sửa thông tin tài khoản</router-link>
                <div class="dropdown-divider"></div>
                <a href="/logout" class="dropdown-item">Đăng xuất</a>
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
  export default {
    data() {
      return {
        categories: [], // Assuming you have categories data
        searchQuery: '',
        user: null, // Assuming you have user data
        count: 0 // Assuming you have cart count data
      };
    },
    methods: {
      search() {
        // Perform search logic
      }
    }
  };
  </script>