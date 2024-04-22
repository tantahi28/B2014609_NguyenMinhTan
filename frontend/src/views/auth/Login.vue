<template>
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card" style="border-radius: 1rem;">
              <div class="row g-0">
                <div class="col-md-6 col-lg-5 d-none d-md-block">
                  <img src="https://img.freepik.com/free-vector/gradient-bookstore-logo_23-2149332421.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1713657600&semt=ais" alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem;" />
                </div>
                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                  <div class="card-body p-4 p-lg-2 text-black">
                    <form @submit.prevent="login" method="POST" action="/login">
                      <div class="d-flex align-items-center mb-3 pb-1">
                        <!-- <img src="/img/logo.png" style="height: auto; width: 80px;" class="img-fluid rounded mr-2" alt="..." /> -->
                        <span class="h1 fw-bold mb-0">BM</span>
                      </div>
  
                      <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Đăng nhập</h5>
  
                      <div class="form-outline mb-4">
                        <input v-model="username" type="text" id="form-username" name="username" class="form-control form-control-lg" />
                        <label class="form-label" for="form-username">Tên người dùng</label>
                      </div>
  
                      <div class="form-outline mb-4">
                        <input v-model="password" type="password" id="form-password" name="password" class="form-control form-control-lg" />
                        <label class="form-label" for="form-password">Mật khẩu</label>
                      </div>
  
                      <div class="pt-1 mb-4">
                        <button class="btn btn-dark btn-lg btn-block" type="submit">Đăng nhập</button>
                      </div>
  
                      <a class="small text-muted" href="#!">Quên mật khẩu?</a>
                      <p class="mb-5 pb-lg-2" style="color: #393f81;">Chưa có tài khoản? <router-link to="/auth/register" style="color: #393f81;">Đăng ký ngay</router-link></p>
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
        authService: new AuthService(),
        username: '',
        password: '',
      };
    },
    methods: {
    async login() {
      let data = await this.authService.login({
        username: this.username,
        password: this.password
      })
      console.log(data);
      if (data.status == 'success') {
        this.$router.push('/')
      }
    }
    }
  };
  </script>
  