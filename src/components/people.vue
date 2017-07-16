<template>
  <div id="people">
    <ul>
      <li><p @click="back"><img src="../img/04.png" alt=""></p><p>个人中心</p><p>退出</p></li>
    </ul>
    <div>
      <ul>
        <li><div></div></li>
        <li>abc张孝棕</li>
        <li>
          <div>
            <p>0</p>
            <p>收藏的宝贝</p>
          </div>
          <div>
            <p>0</p>
            <p>收藏的店铺</p>
          </div>
          <div>
            <p>0</p>
            <p>优惠券</p>
          </div>
          <div>
            <p>0</p>
            <p>收货地址</p>
          </div>
        </li>
      </ul>
      <div><p><img src="../img/08.png" alt="">成为分享答人</p><p>分享赚钱<img src="../img/05.png" alt=""></p></div>
      <div id="status">
        <div>
          <router-link to="/people/message">
            <p>0</p>
            <p>全部订单</p>
          </router-link>
          <router-link to="/people/message">
            <p>0</p>
            <p>待付款</p>
          </router-link>
          <router-link to="/people/message">
            <p>0</p>
            <p>优惠券</p>
          </router-link>
          <router-link to="/people/message">
            <p>0</p>
            <p>待评价</p>
          </router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'people',
    data(){
      return {

      }
    },
    methods: {
      back:function () {
        window.history.go(-1);
      }
    }
  }
</script>
<style scoped>
  #people{width: 100%;height: 100%;}
  #people>ul{width: 100%;}
  #people>ul>li{width: 100%;}
  #people>ul>li:first-of-type{display: flex;justify-content: space-between;font-size: .3rem;align-items: center;padding: .2rem;}
  #people>ul>li:first-of-type img{height: .28rem;}
  #people>ul>li:first-of-type p{display: flex;align-items: center;}
  #people>div{width: 100%;}
  #people>div>ul{width: 100%;background: url("../img/07.jpg") no-repeat;background-size: cover;}

  #people>div>ul>li:first-of-type{width:100%;height: 1.2rem;display: flex;justify-content: center;align-items: center;padding: 1rem 0 .5rem 0;}
  #people>div>ul>li:first-of-type>div{height: 1rem;width: 1rem;border-radius: 50%;background:yellow;}
  #people>div>ul>li:nth-of-type(2){font-size: .3rem;color:white;text-align: center;padding: .18rem 0;border-bottom: 1px solid  rgba(255,255,255,.5);}
  #people>div>ul>li:nth-of-type(3){width: 100%;display: flex;justify-content: space-between;}
  #people>div>ul>li:nth-of-type(3)>div{width: 25%;display: flex;font-size: .24rem;align-items: center;flex-wrap: wrap;padding: .4rem 0;}
  #people>div>ul>li:nth-of-type(3)>div:nth-of-type(2){border-right: 1px solid rgba(255,255,255,.5);}
  #people>div>ul>li:nth-of-type(3)>div>p{width: 100%;display: flex;justify-content: center;color: #F2F5F8;}
  #people>div>div:nth-of-type(1){width: 100%;display: flex;justify-content: space-between;padding: .2rem;background: white;margin: .2rem 0;}
  #people>div>div:nth-of-type(1)>p:nth-of-type(1){font-size: .35rem;display: flex;align-items: center;}
  #people>div>div:nth-of-type(1)>p:nth-of-type(1) img{height: .6rem;margin-right: .2rem;}
  #people>div>div:nth-of-type(1)>p:nth-of-type(2){font-size: .2rem;display: flex;align-items: center;}
  #people>div>div:nth-of-type(1)>p:nth-of-type(2) img{height: .35rem;margin-left: .2rem;}

  #status{width: 100%;background: white;}
  #status>div{width: 100%;display: flex;justify-content: space-between;}
  #status>div>a{width: 25%;display: flex;font-size: .24rem;align-items: center;flex-wrap: wrap;padding: .2rem 0;}
  #status>div>a>p{width: 100%;display: flex;justify-content: center;}
  /*#status>div>.router-link-active{color:red;}*/

</style>
