<template>
  <div id="list">
    <router-link to="/xiang">
    <ul v-for="li in message" >
      <li>
        <p><img :src="li.show.img" alt=""></p>
        <img :src="li.leftbottom_taglist[0]" alt="">
      </li>
      <li>{{li.title}}</li>
      <li><span>{{li.price}}</span><span>{{li.orgPrice}}</span></li>
      <li>{{li.sale}}人已购买</li>
    </ul>
    </router-link>
  </div>
</template>

<script>
  import Xiang from  '../components/xiang'
  export default {
    name: 'paixu',
    data(){
      return {

      }
    },
    components:{
      Xiang
    },
    props:{
      message:{}
    },
    methods:{

    }
  }
</script>

<style scoped>
#list{width: 100%;}
#list>a>ul{width: 49.5%;}
#list>a{width: 100%;display: flex;justify-content: space-between;flex-wrap: wrap;background: white;margin-top: .9rem;}
#list>a>ul>li{width: 100%;font-size: .2rem;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
#list>a>ul>li>p>img{width:100%;height:100%;display: block;}
#list>a>ul>li>p{width:100%;height:100%;}
#list>a>ul>li:first-of-type{width:100%;position: relative;height:5rem;}
#list>a>ul>li:first-of-type>img{position: absolute;bottom: 0;left: 0;height: .4rem;}
#list>a>ul>li:nth-of-type(3){color: red;padding-top: .05rem;}
#list>a>ul>li:nth-of-type(2){padding-top: .05rem;}
#list>a>ul>li:nth-of-type(4){color:darkgray;padding: .1rem 0;}
#list>a>ul>li:nth-of-type(3) span:last-of-type{color: darkgray;text-decoration: line-through;margin-left: .08rem;}

</style>
