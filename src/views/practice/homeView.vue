<template>
  <div>
    <h1>homeView</h1>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="add()">add</button>
    <h2>{{ $store.state.moduleA.name }}</h2>
    <button @click="updateName()">update name</button>
    <h2>{{ $store.getters.fullName }}</h2>
    <h2>{{ $store.getters.fullNameRoot }}</h2>
    <button @click="updateNameModulA()">action update name</button>
  </div>
</template>
<script>
export default {
  name: 'homeView',
  data() {
    return {
    }
  },
  methods: {
    add () {
      this.$store.dispatch('updateInfoAction','payload')
    },
    updateName () {
      this.$store.commit('uadateName','new name')
    },
    updateNameModulA () {
      this.$store.dispatch('updateNameActionModuleA')
    }
  }
}
</script>
<style scoped>
</style>