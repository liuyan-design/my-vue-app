<template>
  <div>
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
    <!-- <input v-model="userid" placeholder="userid" class="logininput"><br/>
        <button @click="aboutClick()">关于</button>
        <router-link :to="'/user/'+userid" tag="button">user</router-link>   -->
  </div>
</template>
<script>
import MainTabBar from '@/views/components/mainTabBar.vue'
export default {
  name: "indexView",
  components: {
    MainTabBar
  },
  data() {
    return {
    };
  },
  methods: {
    aboutClick() {
      console.log("aboutClick");
      //跳转到about画面
      // this.$router.push('/about')
      //或者
      this.$router.replace("/about");
    },
  },
};
</script>
<style scoped>
</style>