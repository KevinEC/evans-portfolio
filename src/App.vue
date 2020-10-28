<template>
  <div id="app">
    <BaseHome>
      
    </BaseHome>
  </div>
</template>

<script>
import Vue from 'vue'
import "./App.scss"

import BaseHome from './components/BaseHome.vue'

export default {
  name: 'App',
  components: {
    BaseHome
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
