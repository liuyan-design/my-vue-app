<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from '@/components/mainTabBar.vue'
export default {
  components: {
    MainTabBar
  }
}
</script>

<style>
@import url(@/assets/css/base.css);
</style>
