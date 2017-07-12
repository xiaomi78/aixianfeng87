<template>
  <div id="search">
    <form>
      <div><img src="../img/02.png" alt=""></div>
      <div><p><img src="../img/03.png" alt=""><input type="text" placeholder="套装"/></p></div>
      <div><img src="../img/01.png" alt=""></div>
    </form>
  </div>
</template>

<script>

  export default {
    name: 'search',
    data(){
      return {

      }
    },
    mounted(){

    }
  }
</script>

<style scoped>
#search{width: 100%;height:0.85rem;background: white;}
  form{width: 100%;height: 100%;display: flex;justify-content: space-between;align-items: center;padding: 0 .3rem;}
form>div{height: 100%;display: flex;align-items: center;}
form img{height: 70%;}
form>div:nth-of-type(2){width: 75%;}
form>div:nth-of-type(3)>img{height: 48%;}
form>div:nth-of-type(2)>p{background:#ECECEC;height:60%;display: flex;align-items: center; justify-content: flex-end;width: 100%;border-radius:.05rem; }
form>div:nth-of-type(2)>p>input{width: 88%;border: 0;background:#ECECEC;height: 90%;outline: none;margin-left: .1rem;}
form>div:nth-of-type(2)>p>img{height:52%;}
</style>
