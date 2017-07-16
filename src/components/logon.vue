<template>
<div id="logon">

    <div id="mine-head">
      <p><router-link to="/shopcar"><img src="../img/04.png" alt=""></router-link></p>
      <p>登陆-美丽说</p>
      <p @click="zhuce">注册</p>
    </div>
  <ul>
    <li><img src="../img/06.png" alt=""></li>
    <li><p></p>美丽说账号登陆<p></p></li>
    <li><div><input type="text" placeholder="昵称/邮箱/手机号" v-model="input1" @blur="doThis"  @click="test"/></div></li>
    <li><div><input v-model="input2" type="text" placeholder="密码" @blur="doThis1"  @click="test"/></div></li>
    <li ><button @click="succsee">登陆</button></li>
    <li>忘记密码？</li>
    <li><div ref="alert" :class="{success:a}"></div></li>
  </ul>
</div>
</template>
<script>
  export default {
    name: 'mine',
    data(){
      return {
        input1: '',
        input2: '',
        pas:-1,
        a:false,
      }
    },
    methods: {
      doThis: function () {
        var reg =  /^1[3|4|5|7|8]\d{9}$/;
        var reg1 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var reg2= /^[\u4E00-\u9FA5]{2,4}$/;
        if(reg.test(this.input1)||reg1.test(this.input1)||reg2.test(this.input1)){
          this.pas=true;
        }else{
          this.a=true;
          if(this.input1 !== "" ){
            this.$refs.alert.innerHTML="用户名错误";
            this.a=true;
          }if(this.input1 == "" ){
            this.$refs.alert.innerHTML="用户名不能为空";
            this.a=true;
          }
        }
      } ,
      doThis1: function () {
        var reg= /^\d{6,18}$/;
        if(reg.test(this.input2)){
          this.pas=true;
        }
        else{
          if(this.input2 !== "" ){
            this.$refs.alert.innerHTML="密码错误";
            this.a=true;
            this.pas=false;
          }
          if(this.input2 == "" ){
            this.$refs.alert.innerHTML="密码不能为空";
            this.a=true;
            this.pas=false;
          }
        }
      },
      test:function (){
        this.a=false;
        this.$refs.alert.innerHTML=[]
      },
      succsee:function () {
        if(this.input1 == "13367287218"&&this.input2==123456){
          localStorage.setItem("user",true);
          this.$router.push({path:'/people'});
        }
        if(this.input1 == ""||this.input2==''){
          this.$refs.alert.innerHTML="请输入用户名或密码";
          this.a=true;
          this.pas=false;
        }
      },
      zhuce:function () {
        this.$router.push({path:'/zhuce'});
      }
    }
  }
</script>
<style scoped>
  #mine-head{width: 100%;height:1rem;display: flex;justify-content: space-between;align-items: center;padding: 0 .3rem;}
  #mine-head>p{height:100%;display: flex;align-items: center;font-size: .5rem;}
  #mine-head>p a{height:100%;display: flex;align-items: center;}
  #mine-head>p img{height:48%;}


  #logon{width: 100%;height: 111%;background: white;}
  #logon>ul{width: 100%;height: 100%;}
  #logon>ul>li:nth-of-type(1){width: 100%;height: 2.44rem;display: flex;justify-content: center;align-items: center;padding: 1.7rem 0;}
  #logon>ul>li:nth-of-type(1) img {height: 2rem;}
  #logon>ul>li:nth-of-type(2){font-size: .29rem;color: darkgray;display: flex;justify-content: space-between;align-items: center;padding: 0 .32rem;}
  #logon>ul>li:nth-of-type(2) p{border-top:1px solid darkgray;width: 33%;}
  #logon>ul>li:nth-of-type(3){padding: 0 .32rem;border-radius: 2%;}
  #logon>ul>li:nth-of-type(3)>div{width: 100%;height:.8rem;background:#f2f2f2;display: flex;align-items: center;margin: .2rem 0;}
  #logon>ul>li:nth-of-type(3)>div input{width: 100%;height:90%;background: none;border: none;outline: none;font-size: .27rem;padding-left: .1rem;}
  #logon>ul>li:nth-of-type(4){padding: 0 .32rem;border-radius: 2%;}
  #logon>ul>li:nth-of-type(4)>div{width: 100%;height:.8rem;background:#f2f2f2;display: flex;align-items: center;margin: .2rem 0;}
  #logon>ul>li:nth-of-type(4)>div input{width: 100%;height:90%;background: none;border: none;outline: none;font-size: .27rem;padding-left: .1rem;}
  #logon>ul>li:nth-of-type(5){padding: 0 .32rem;height: .8rem;width: 100%;}
  #logon>ul>li:nth-of-type(5)>button{width: 100%;height: 100%;border: 0;background: #ff5777;border-radius: 2%;font-size: .4rem;color:white;}
  #logon>ul>li:nth-of-type(7){margin: 0 .32rem;border-radius: 2%;display: flex;justify-content: center;margin: .2rem 0;}
  #logon>ul>li:nth-of-type(7) div{width: 80%;height:.8rem;font-size: .27rem;display: flex;align-items: center;justify-content: center;color: #F2F5F8;}
  #logon>ul>li:nth-of-type(6){width: 100%;text-align: right;padding: 0 .29rem;font-size: .3rem;margin-top: .1rem;}

  .success{background: #ff5777 !important;}
  .erro{background: orange !important}
</style>
