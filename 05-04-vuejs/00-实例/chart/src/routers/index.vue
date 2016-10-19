<style scoped>
    h1{
        color: #28a7e1;
        text-align: center;
        font-size: 25px;
        font-weight: bold;
        margin-top: 100px;
    }
    a{
        display: block;
        text-align: center;
        margin-top: 10px;
    }
</style>
<template>
    <h1>Hello TalkingData</h1>
    <a v-link="{path: '/chart'}">打开图表页</a>
</template>
<script>
    module.exports = {
        data: function() {
            return {

            }
        },
        ready: function() {
            
        },
        beforeDestroy: function() {

        },
        methods: {
            
        }
    }
</script>
