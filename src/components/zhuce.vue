<template>
  <div id="zhuce">
    <ul>
      <li><p @click="back"><img src="../img/04.png" alt=""></p><p>注册</p><p>首页</p></li>
      <li><div><input type="text" placeholder="国家地区"><p>中国</p></div></li>
      <li><div><p>+86</p><input type="text" placeholder="手机号"></div></li>
      <li><div><input type="text" placeholder="请输入短信验证"><p>获取验证码</p></div> </li>
      <li><p>立即注册</p></li>
      <li>* 注册代表同意《美丽说网络服务使用协议》</li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'zhuce',
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
#zhuce{width: 100%;height: 100%;}
#zhuce>ul{width: 100%;}
#zhuce>ul>li{width: 100%;}
#zhuce>ul>li:first-of-type{display: flex;justify-content: space-between;font-size: .3rem;align-items: center;padding: .2rem;}
#zhuce>ul>li:first-of-type img{height: .28rem;}
#zhuce>ul>li:first-of-type p{display: flex;align-items: center;}
#zhuce>ul>li:nth-of-type(2){padding:0 .2rem;border-top:1px solid #D8D8D9;height: 1rem;}
#zhuce>ul>li:nth-of-type(2) div{display: flex;justify-content: space-between;font-size: .3rem;height: 1rem;border-bottom:1px solid #D8D8D9;align-items: center;}
#zhuce>ul>li:nth-of-type(2) input{outline: none;border: 0;background:#F2F5F8;height: 80%;}

#zhuce>ul>li:nth-of-type(3){padding:0 .2rem;height: 1rem;}
#zhuce>ul>li:nth-of-type(3) div{display: flex;justify-content: flex-start;font-size: .3rem;height: 1rem;border-bottom:1px solid #D8D8D9;align-items: center;}
#zhuce>ul>li:nth-of-type(3) input{border: 0;background:#F2F5F8;height: 60%;}
#zhuce>ul>li:nth-of-type(3) div p{border-right:1px solid #D8D8D9;padding-right: .2rem; margin-right: .2rem;height:60%;display: flex;align-items: center;}

#zhuce>ul>li:nth-of-type(4){padding:0 .2rem;height: 1rem;}
#zhuce>ul>li:nth-of-type(4) div{display: flex;justify-content: flex-start;font-size: .3rem;height: 1rem;border-bottom:1px solid #D8D8D9;align-items: center;}
#zhuce>ul>li:nth-of-type(4) input{border: 0;background:#F2F5F8;height: 70%;outline: none;}
#zhuce>ul>li:nth-of-type(4) div p{border-left:1px solid #D8D8D9;padding-left: .2rem; margin-leftt: .4rem;font-size: .3rem;height:60%;display: flex;align-items: center;}
#zhuce>ul>li:nth-of-type(5){padding:0 .2rem;margin-top:.2rem;}
#zhuce>ul>li:nth-of-type(5) p{background: #FF5777;border-radius: 3px;color: white;font-size: .3rem;height: .8rem;display: flex;align-items: center;justify-content: center;}
#zhuce>ul>li:nth-of-type(6){font-size: .1rem;text-align: left;padding-left:.2rem;}

</style>
