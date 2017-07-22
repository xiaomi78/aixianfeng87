<template>
  <div class="head">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="img in banner.topImages">
        <img :src="img">
      </swiper-slide>
      <!-- Optional controls-->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'lunbo',
    data(){
      return {
        swiperOption: {
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置

//          autoplay: 1000,
//          direction:"horizontal",/*横向滑动*/
          grabCursor : true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl :true,
          observeParents:true,
          autoplayDisableOnInteraction:true,
          loop:true,/*形成环路（即：可以从最后一张图跳转到第一张图*/
          initialSlide :1,

        }

      }
    },
    props:{
      banner:{}
    },
    mounted: function () {

    }
  }
</script>

<style scoped>
img{width: 100%;position: relative;margin-top: -.9rem;}
.head{width: 100%;height:100%;}
.head>div{height: 100%;overflow: hidden;}
  .swiper-pagination{text-align: right;}
</style>
