<template>
    <div>
      <Header />
      <div class="relative md:ml-64 bg-blueGray-100">
        <div class="px-4 md:px-10 mx-auto w-full -mt-56">
          <router-view />
          <!-- <footer-admin /> -->
        </div>
      </div>
    </div>
  </template>
  <script>
  import Header from '@/layouts/Admin/Header.vue';
  import { useAuthStore } from '../../stores/auth.store'
  import { useRouter } from 'vue-router';
  export default {
    name: "admin-layout",
    components: {
        Header,
    },
    setup() {
      let authStore = useAuthStore()
      const router = useRouter();
      
      if(authStore.token == null) 
      router.push('/auth/admin/login')
    },
  };
  </script>
  