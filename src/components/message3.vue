<template>
  <div id="message">
    <img src="../img/09.png" alt="">
    <p>你还没有相关的订单</p>
    <div class="pullUp" status="stop"></div>
  </div>
</template>

<script>
  export default {
    name: 'message3',
    data(){
      return {

      }
    },
    methods:{


    }
  }
</script>

<style scoped>
  .pullUp[status=stop]:before {
    content: "木有了...";
    font-size: .1rem;

  }
  #message{width: 100%;}
  #message>p{width: 100%;font-size: .3rem;margin-bottom: 1rem;}
  #message>img{height: 2.5rem;margin-top: 1rem;}
</style>
