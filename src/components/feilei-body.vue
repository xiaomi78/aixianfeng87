<template>
  <div id="fenlei-body">
    <p class="title">本周流行</p>
    <ul class="list">
      <li v-for="(list,index) in arry" @click.$index="send(index)">
        <router-link :to="{path:'skrt',query: {id:index}}">
        <div><img :src="list.image" alt=""></div>
        <p>{{list.title}}</p>
        </router-link>
      </li>
    </ul>

  </div>
</template>
<script>
  export default {
    name: 'fenlei-body',
    data(){
        return{
          arry:[]
        }
    },
    mounted: function () {
      this.$http.jsonp('https://simba-api.meilishuo.com/venus/mce/v1/urlChange/pc?pid=20783&channel=wap&page=1&pageSize=30&_=1499828115511',{jsonp: 'callback'}).then(function (res) {
//          console.log(res.body);
          this.arry=res.body.value
      });
    },
    methods:{
          send:function(index){
//            console.log('fenlei-body:'+index);
          }
    }
  }
</script>
<style scoped>
 #fenlei-body{background: white;}
.title{text-align: left;font-size: .35rem;padding:.1rem .2rem;}
.list{width: 100%;display: flex;justify-content: space-between;align-items: center;flex-wrap: wrap;}
.list>li{width: 25%;border-top:1px solid gainsboro;border-right:1px solid gainsboro;height: 2.4rem;}
.list>li>a{width: 100%;}
.list>li:nth-of-type(4n+4)>a{border-right:0;}
.list>li:nth-last-of-type(2)>a{padding-bottom:.1rem;}
.list>li:nth-last-of-type(3)>a{padding-bottom:.1rem;}
.list>li:nth-last-of-type(4)>a{padding-bottom:.1rem;}
.list>li:last-of-type{padding-bottom:.1rem;}
.list>li div>img{height: 2rem;;display: block;}
.list>li div{width:100%;display: flex;justify-content: center;align-items: center;}
.list>li p{font-size: .25rem;padding-bottom:.1rem;text-align: center;}
</style>
