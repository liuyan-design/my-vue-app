<template>
    <div>
        <div id="tab-bar">
           <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'tabBarView',
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>
<style scoped>
#tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    box-shadow: 0 -1.5px 1px rgba(100, 100, 100, 0.1);
}
</style>