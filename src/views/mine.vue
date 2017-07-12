<template>
  <div id="mine">
    <div id="mine-head">
      <p @click="send1"><router-link to="/shopcar"><img src="../img/04.png" alt=""></router-link></p>
      <p>登陆-美丽说</p>
      <p>注册</p>
    </div>
    <h2>我是mine</h2>
  </div>
</template>
<script>
  export default {
    name: 'mine',
    data(){
      return {
        msg:true
      }
    },
    methods:{
      send1:function(){
        localStorage.setItem('tabShow','show');
      }
    }
  }
</script>
<style scoped>
  #mine-head{width: 100%;height:1rem;display: flex;justify-content: space-between;align-items: center;padding: 0 .3rem;}
  #mine-head>p{height:100%;display: flex;align-items: center;font-size: .5rem;}
  #mine-head>p a{height:100%;display: flex;align-items: center;}
  #mine-head>p img{height:48%;}
</style>
