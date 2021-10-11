<template>
  <div id="app">
    <base-navbar></base-navbar>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
    <base-footer></base-footer>
  </div>
</template>

<script>
import Vue from 'vue';
import "./App.scss";
import "@egjs/flicking-plugins/dist/arrow.css";
import "@egjs/vue-flicking/dist/flicking.css";
import BaseNavbar from "./components/BaseNavbar";
import BaseFooter from "./components/BaseFooter";



export default {
  name: 'App',
  components: {
    BaseNavbar,
    BaseFooter,
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //overflow: hidden;
}
</style>
