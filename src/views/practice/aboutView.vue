<template>
    <div>
        <h1>aboutview</h1>
        <!-- <router-link to="/about/news?id=001&name=username" tag="button">新闻</router-link> -->
        <!-- <router-link :to="{path:'/about/news',query:{id:id,name:name}}" tag="button">新闻</router-link> -->
        <router-link to="/about/news" tag="button">新闻</router-link>
        <router-link to="/about/message" tag="button">消息</router-link>
        <router-view></router-view>
    </div>

</template>
<script>
export default {
    name: 'aboutView',
    data () {
        return {
            id: '002',
            name: 'username'
        }
    }
}
</script>