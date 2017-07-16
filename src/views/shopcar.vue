<template>
  <div id="shopcar">
    <div id="shopcar-head">
      <p @click="back"><img src="../img/04.png" alt=""></p>
      <p>购物车</p>
      <p><router-link to="/home">首页</router-link></p>
    </div>
    <h2>我是shopcar</h2>
    <Tab></Tab>
  </div>
</template>
<script>
  import Tab from  '../components/table'
  export default {
    name: 'shopcar',
    components:{
     Tab
    },
    methods: {
      back:function () {
        window.history.go(-1);
      }
    }
  }
</script>
<style scoped>
  #shopcar-head{width: 100%;height:1rem;display: flex;justify-content: space-between;align-items: center;padding: 0 .3rem;}
  #shopcar-head>p{height:100%;display: flex;align-items: center;font-size: .5rem;}
  #shopcar-head>p img{height:48%;}
</style>
