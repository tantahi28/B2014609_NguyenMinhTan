<template>
    <section class="vh-75 mt-3">
      <div class="container mb-4 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card" style="border-radius: 1rem;">
              <div class="row g-0">
                <div class="col-md-6 col-lg-5 d-none d-md-block">
                  <img src="https://img.freepik.com/free-vector/gradient-bookstore-logo_23-2149332421.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1713657600&semt=ais"
                    alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem;" />
                </div>
                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                  <div class="card-body p-4 p-lg-2 text-black">
                    <form @submit.prevent="register">
                      <div class="d-flex align-items-center mb-3 pb-1">
                        <span class="h1 fw-bold mb-0">BM</span>
                      </div>
  
                      <h5 class="fw-normal pb-3" style="letter-spacing: 1px;">Đăng ký tài khoản mới</h5>
                      <div class="form-outline mb-4">
                        <input v-model="username" type="text" id="form-username" placeholder="Nhập tên người dùng..." class="form-control form-control-lg" />
                      </div>
                      <div class="form-outline mb-4">
                        <input v-model="password" type="password" id="form-password" placeholder="Nhập mật khẩu..." class="form-control form-control-lg"/>
                      </div>
                      <div class="pt-1">
                        <button class="btn btn-dark btn-lg btn-block" type="submit">Đăng ký</button>
                      </div>
                      <p class="mb-2 pb-lg-2" style="color: #393f81;">Đã có tài khoản? <router-link to="/auth/login" style="color: #393f81;">Đăng nhập ở đây</router-link></p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import AuthService from "@/services/auth.service"
  export default {
    data() {
      return {
        username: '',
        password: '',
        authService: new AuthService(),
      }
    },
    methods: {
      async register() {
        let data = await this.authService.register({
          username: this.username,
          password: this.password
        })
        console.log(data);
        if (data.status == 'success') {
          this.$router.push('/')
        }
      }
    }
  }
  </script>
