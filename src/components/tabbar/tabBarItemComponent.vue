<template>
  <div class="tabbar-item" @click="tabbaritemclick()">
    <slot name="item-icon" v-if="!isActive"></slot>
    <slot name="item-icon-active" v-else></slot>
    <div :style="activeStyle">{{ itemtext }}</div>
  </div>
</template>
<script>
export default {
  name: "tabBarItemComponent",
  data() {
    return {
    };
  },
  computed: {
    isActive () {
      // return this.$route.link.indexOf(this.link) !== -1
      return this.$route.path.indexOf(this.link) !== -1
    },
    activeStyle () {
      return this.isActive ? {color:this.activecolor} : {}
    }
  },
  methods: {
    tabbaritemclick () {
      this.$router.push(this.link)
      // this.isActive = true
    }
  },
  props: {
    itemtext: String,
    link: String,
    activecolor: {
      type: String,
      default: 'orange'
    }
  }
};
</script>
<style scoped>
.tabbar-item {
    flex: 1;
    text-align: center;
    font-size: 10px;
    height: 49px;
    /* color: orange; */
    font-weight: bold;
}

.tabbar-item img{
    margin-top: 3px;
    margin-bottom: 3px;
    height: 24px;
    width: 24px;
    vertical-align: middle;
}
</style>