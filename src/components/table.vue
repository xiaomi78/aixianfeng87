<template>
  <div id="tab">
    <ul>
      <li><router-link to="/home">首页</router-link></li>
      <li><router-link to="/fenlei">分类</router-link></li>
      <li><router-link to="/shopcar">购物车</router-link></li>
      <li><a @click='mine'>我的</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'tab',
    data(){
      return {

      }
    },
    methods:{
      mine:function () {
          if(localStorage.getItem("user")==undefined){
            this.$router.push({path:'/logon'});
          }
        if(localStorage.getItem("user")=="false"){
          this.$router.push({path:'/zhuce'});
        }
        if(localStorage.getItem("user")=="true"){
          this.$router.push({path:'/people'});
        }
      }
    }
  }
</script>

<style scoped>
  #tab{width: 100%;height:10%;position: fixed;bottom: 0;background: palevioletred;}
  #tab>ul{width: 100%;height:100%;display: flex;justify-content: space-between;align-items: center;font-size: .3rem;}
  #tab>ul>li{width: 25%;text-align: center;}
  #tab>ul>li .router-link-active{color:ivory;}
</style>
