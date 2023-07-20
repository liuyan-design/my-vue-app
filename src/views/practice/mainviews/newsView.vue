<template>
    <div>
        <h1>newsView</h1>
        <ul>
            <li>新闻1</li>
            <li>新闻2</li>
            <li>新闻3</li>
            <li>新闻4</li>
        </ul>

        {{ user.id }} -- {{ user.name }}
    </div>
</template>
<script>
export default {
    name: 'newsView',
    data() {
        return {
        }
    },
    methods: {
    },
    computed: {
        user()  {
            const user = {
                id: this.$route.query.id,
                name: this.$route.query.name 
            }
            return user
        }
    }
}
</script>
<style scoped>
</style>