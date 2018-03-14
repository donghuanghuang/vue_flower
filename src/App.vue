<template>
  <div id="app">
      <v-header></v-header>
      <router-view></router-view>
      <v-footer></v-footer>
  </div>
</template>

<script>
  import './assets/js/jquery-1.11.3.js';
  import header from '@/components/header/header'
  import footer from '@/components/footer/footer'
export default {
  components:{
    'v-header':header,
    'v-footer':footer
  },
}
</script>

<style>
  /*@import "assets/css/normalize.css";*/
  #app{
    width:100%;
    overflow: hidden;
  }
</style>
