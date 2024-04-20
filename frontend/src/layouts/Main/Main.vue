<template>
  
    <div class="homepage position-relative">
      <Header></Header>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script>
  import Header from '@/layouts/Main/Header.vue';
//   import FooterComponent from './partial/FooterComponent.vue';
//   import ToastMessages from './partial/ToastMessages.vue';
  
  export default {
    components: {
        Header,

    }
  };
  </script>