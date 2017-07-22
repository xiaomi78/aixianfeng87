<template>
  <div id="xiang">
    <div id="box">
      <lunbo :banner="arry"></lunbo>
    </div>
    <ul class="ul">
      <li>{{arry.itemInfo.title}}</li>
      <li>
        <span>￥</span>
        <p> {{arry.itemInfo.highNowPrice}}</p>
        <span>￥{{arry.itemInfo.highPrice}}</span>
      </li>
      <li>免运费</li>
      <li>
        <p><img src="../img/10.png" alt="">退运费</p>
        <p><img src="../img/12.png" alt="">全国包邮</p>
        <p><img src="../img/11.png" alt="">七天无理由退换货></p>
      </li>
    </ul>
  </div>
</template>

<script>
  import lunbo from './lunbo'
  export default {
    name: 'xiang',
    data(){
      return {
        arry:[]
      }
    },
    components:{
      lunbo
    },
    mounted: function () {
      this.$http.jsonp('http://m.mogujie.com/jsonp/detail.api/v1?iid=1kblht8&template=1-2-detail_normal-1.0.0',{jsonp: 'callback'}).then(function (res) {
        this.arry=res.body.data;
        console.log(res.body.data);

      });
    },
  }
</script>

<style scoped>
#xiang{width: 100%;height: 111%;overflow: auto;}
#xiang>#box{width: 100%;height: 70%;background: white;}
#xiang>#box>div{width: 100%;}
#xiang>#box>div>img{width: 100%;width: 100%;height: auto;visibility: inherit;display: inherit;}

  .ul>li:nth-of-type(1){font-size: .3rem;padding: .3rem .3rem 0 .3rem;text-align: left;line-height: .5rem;}
.ul>li:nth-of-type(2){font-size: .5rem;padding: .1rem .3rem 0 .3rem;display: flex;justify-content: flex-start;}
.ul>li:nth-of-type(2) span{font-size: .3rem;}
.ul>li:nth-of-type(2) span:last-of-type{font-size: .2rem;text-decoration: line-through;margin-left: .2rem;}

.ul>li:nth-of-type(3){font-size: .2rem;padding: .3rem .3rem 0 .3rem;text-align: left;}
.ul>li:nth-of-type(4){font-size: .2rem;padding: .3rem .3rem 0 .3rem;display: flex;justify-content: space-between;}
.ul>li:nth-of-type(4) img{height: .3rem;}
.ul>li:nth-of-type(4) p{display: flex;align-items: center;}

</style>
