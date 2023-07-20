<template>
    <div>
        <h1>userView</h1>
        <p>hello {{ userID }}</p>
    </div>
</template>
<script>
export default {
    name: 'userView',
    data() {
        return {
        }
    },
    methods: {
    },
    computed: {
        userID () {
            return this.$route.params.userID
        }
    }
}
</script>
<style scoped>
</style>