<template>
  <div>
    <tab-bar>
      <tab-bar-item itemtext="首页" link="/home">
        <img slot="item-icon" src="@/assets/img/tabbar/home.svg" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/home_active.svg"/>
      </tab-bar-item>
      <tab-bar-item itemtext="分类" link="/category">
        <img slot="item-icon" src="@/assets/img/tabbar/category.svg" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/category_active.svg"/>
      </tab-bar-item>
      <tab-bar-item itemtext="购物车" link="/shopcar">
        <img slot="item-icon" src="@/assets/img/tabbar/shopcar.svg" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/shopcar_active.svg"/>
      </tab-bar-item>
      <tab-bar-item itemtext="我的" link="/profile">
        <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/profile_active.svg"/>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from './tabbar/tabBarComponent.vue'
import TabBarItem from './tabbar/tabBarItemComponent.vue'
export default {
  name: "mainTabBar",
  data() {
    return {
    };
  },
  components: {
    TabBar,
    TabBarItem
  },
  methods: {},
};
</script>
<style scoped>
</style>