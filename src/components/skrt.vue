<template>
  <div id="skrt" >
    <div id="box1" v-for="(div,key,index) in arry" v-if="key !== 'category_0'" v-bind:style="{ display: active2}">
      <p class="title">{{div.info.title}}</p>
      <ul>
        <li v-for="img in div.list" @click="quan">
          <img :src="img.image" alt="">
          <p>{{img.title}}</p>
        </li>
      </ul>
    </div>
    <div id="price"  v-bind:style="{ display: active}">
      <div><p @click="hot">流行</p>
        <p @click="Sale">销量</p>
        <p class="price" @click="price">价格 <img @click="ishow" src="../img/05.png" alt=""></p></div>
      <div v-show="ok"><p @click="sanshi">0-30</p>
        <p @click="liushi">30-60</p>
        <p @click="onliushi">60以上</p></div>
      <div v-show="ok">
        <p><input type="text" ref="input1"></p>-<p><input type="text" ref="input2"></p>
        <p>
          <button @click="clean">清空</button>
          <button @click="num">确认</button>
        </p>
      </div>
    </div>
    <Paixu :message="arry1"></Paixu>
  </div>
</template>
<script>
  import Paixu from  './paixu'
  export default {
    name: 'skrt',
    components: {
      Paixu
    },
    data(){
      return {
        ok: false,
        idd: -1,
        arry: [],
        arry1: [],
        arry2: [],
        ak: false,
        num1:'',
        num2:'',
        active: "none",
       active2:"block",
      }
    },
    created: function () {
      this.idd = this.$route.query.id
    },
    mounted(){

      if (this.idd == 12) {
        this.$http.jsonp('http://list.meilishuo.com/search?frame=0&page=1&sort=pop&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=295931cb-b612-40e6-bd95-2d719c4df926&fcid=10062770&_=1499920465010', {jsonp: 'callback'}).then(function (res) {
          this.active="block";
          this.arry1 = res.body.data.list;
          this.arry2 = res.body.data.list;
          console.log(res.body.data.list);
        });
      }
      if (this.idd == 14) {
        this.$http.jsonp('http://list.meilishuo.com/search?frame=0&page=1&sort=pop&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=295931cb-b612-40e6-bd95-2d719c4df926&fcid=10057124&_=1499948696903', {jsonp: 'callback'}).then(function (res) {
          this.active="block";
          this.arry1 = res.body.data.list;
          this.arry2 = res.body.data.list;
          console.log(res.body.data.list);
        });
      }
      if (this.idd == 15) {
        this.$http.jsonp('http://list.meilishuo.com/search?frame=0&page=1&sort=pop&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=295931cb-b612-40e6-bd95-2d719c4df926&fcid=10057097&_=1499944894395', {jsonp: 'callback'}).then(function (res) {
          this.active="block";
          this.arry1 = res.body.data.list;
          this.arry2 = res.body.data.list;
          console.log(res.body.data.list);
        });
      }
      if (this.idd == 0){
        this.$http.jsonp('https://simba-api.meilishuo.com/venus/mce/v1/urlMakeUpChange/h5?channel=wap&page=1&pageSize=30&pid=23020&_=1499842044610', {jsonp: 'callback'}).then(function (res) {
          this.arry = res.body.value;
        });
      }
      if (this.idd == 1){
        this.$http.jsonp('https://simba-api.meilishuo.com/venus/mce/v1/urlMakeUpChange/h5?channel=wap&page=1&pageSize=30&pid=23023&_=1499945262874', {jsonp: 'callback'}).then(function (res) {
          this.arry = res.body.value;
        });
      }
      if (this.idd == 2){
        this.$http.jsonp('https://simba-api.meilishuo.com/venus/mce/v1/urlMakeUpChange/h5?channel=wap&page=1&pageSize=30&pid=23021&_=1499947672836', {jsonp: 'callback'}).then(function (res) {
          this.arry = res.body.value;
        });
      }
      if (this.idd == 3){
        this.$http.jsonp('https://simba-api.meilishuo.com/venus/mce/v1/urlMakeUpChange/h5?channel=wap&page=1&pageSize=30&pid=23022', {jsonp: 'callback'}).then(function (res) {
          this.arry = res.body.value;
        });
      }
      if (this.idd == 4){
        this.$http.jsonp('https://simba-api.meilishuo.com/venus/mce/v1/urlMakeUpChange/h5?channel=wap&page=1&pageSize=30&pid=23019&_=1499947966594', {jsonp: 'callback'}).then(function (res) {
          this.arry = res.body.value;
        });
      }
      if (this.idd == 5){
        this.$http.jsonp('https://simba-api.meilishuo.com/venus/mce/v1/urlMakeUpChange/h5?channel=wap&page=1&pageSize=30&pid=23027&_=1499948011764', {jsonp: 'callback'}).then(function (res) {
          this.arry = res.body.value;
        });
      }
      if (this.idd == 6){
        this.$http.jsonp('https://simba-api.meilishuo.com/venus/mce/v1/urlMakeUpChange/h5?channel=wap&page=1&pageSize=30&pid=23018&_=1499948073558', {jsonp: 'callback'}).then(function (res) {
          this.arry = res.body.value;
        });
      }
      if (this.idd == 7){
        this.$http.jsonp('https://simba-api.meilishuo.com/venus/mce/v1/urlMakeUpChange/h5?channel=wap&page=1&pageSize=30&pid=23017&_=1499948167061', {jsonp: 'callback'}).then(function (res) {
          this.arry = res.body.value;
        });
      }
      if (this.idd == 8){
        this.$http.jsonp('https://simba-api.meilishuo.com/venus/mce/v1/urlMakeUpChange/h5?channel=wap&page=1&pageSize=30&pid=43814&_=1499948198314', {jsonp: 'callback'}).then(function (res) {
          this.arry = res.body.value;
        });
      }
      if (this.idd == 9){
        this.$http.jsonp('https://simba-api.meilishuo.com/venus/mce/v1/urlMakeUpChange/h5?channel=wap&page=1&pageSize=30&pid=52689&_=1499948243008', {jsonp: 'callback'}).then(function (res) {
          this.arry = res.body.value;
        });
      }
      if (this.idd == 10){
        this.$http.jsonp('https://simba-api.meilishuo.com/venus/mce/v1/urlMakeUpChange/h5?channel=wap&page=1&pageSize=30&pid=23525&_=1499948297403', {jsonp: 'callback'}).then(function (res) {
          this.arry = res.body.value;
        });
      }
      if (this.idd == 11){
        this.$http.jsonp('https://simba-api.meilishuo.com/venus/mce/v1/urlMakeUpChange/h5?channel=wap&page=1&pageSize=30&pid=23025&_=1499948338192', {jsonp: 'callback'}).then(function (res) {
          this.arry = res.body.value;
        });
      }
      if (this.idd == 13){
        this.$http.jsonp('https://simba-api.meilishuo.com/venus/mce/v1/urlMakeUpChange/h5?channel=wap&page=1&pageSize=30&pid=23523&_=1499948385732', {jsonp: 'callback'}).then(function (res) {
          this.arry = res.body.value;
        });
      }



    },
    methods: {
      ishow: function () {
        this.ok = !this.ok
      },
      Sale: function () {
        this.ak = !this.ak;
        console.log(this.ak);
        if (this.ak) {
          this.arry1.sort(function (x, y) {
            return y.sale - x.sale;
          })
        } else {
          this.arry1.sort(function (x, y) {
            return x.sale - y.sale;
          })
        }
      },
      hot: function () {
        this.ak = !this.ak;
        console.log(this.ak);
        if (this.ak) {
          this.arry1.sort(function (x, y) {
            return y.cfav - x.cfav;
          })
        } else {
          this.arry1.sort(function (x, y) {
            return x.cfav - y.cfav;
          })
        }
      },
      price: function () {
        this.ak = !this.ak;
        if (this.ak) {
          this.arry1.sort(function (x, y) {
            return y.price.substring(1) - x.price.substring(1);
          })
        } else {
          this.arry1.sort(function (x, y) {
            return x.price.substring(1) - y.price.substring(1);
          })
        }
      },
      sanshi: function () {
        this.arry1 = [];
        for (var i = 0; i < this.arry2.length; i++) {
          if (this.arry2[i].price.substring(1) - 0 < 30) {
              if (this.arry2[i]=[]){
                  break
              }
            this.arry1.push(this.arry2[i]);

          }
        } this.ak = !this.ak;
        if (this.ak) {
          this.arry1.sort(function (x, y) {
            return y.price.substring(1) - x.price.substring(1);
          })
        } else {
          this.arry1.sort(function (x, y) {
            return x.price.substring(1) - y.price.substring(1);
          })
        }
      },
      liushi: function () {
        this.arry1 = [];
        for (var i = 0; i < this.arry2.length; i++) {
          if (this.arry2[i].price.substring(1) - 0 < 60) {
            this.arry1.push(this.arry2[i]);
          }
        } this.ak = !this.ak;
        if (this.ak) {
          this.arry1.sort(function (x, y) {
            return y.price.substring(1) - x.price.substring(1);
          })
        } else {
          this.arry1.sort(function (x, y) {
            return x.price.substring(1) - y.price.substring(1);
          })
        }
      },
      onliushi: function () {
        this.arry1 = [];
        for (var i = 0; i < this.arry2.length; i++) {
          if (this.arry2[i].price.substring(1) - 0 > 60) {
            this.arry1.push(this.arry2[i]);
          }
        }
        this.ak = !this.ak;
        if (this.ak) {
          this.arry1.sort(function (x, y) {
            return y.price.substring(1) - x.price.substring(1);
          })
        } else {
          this.arry1.sort(function (x, y) {
            return x.price.substring(1) - y.price.substring(1);
          })
        }
      },
      num:function () {
        this.num1 = this.$refs.input1.value;
        this.num2 = this.$refs.input2.value;
        console.log(this.num1,this.num2);
        this.arry1 = [];
        for (var i = 0; i < this.arry2.length; i++) {
          if (this.arry2[i].price.substring(1)-0 > this.num1 && this.arry2[i].price.substring(1)-0 < this.num2) {
            this.arry1.push(this.arry2[i]);
          }
          if (this.arry2[i].price.substring(1)-0 > this.num1 ) {
            this.arry1.push(this.arry2[i]);
          }
          if (this.arry2[i].price.substring(1)-0 < this.num2&& this.num1=='') {
            this.arry1.push(this.arry2[i]);
          }
        }
      },
      clean:function () {
        this.$refs.input1.value=[];
        this.$refs.input2.value=[];
      },
      quan :function(){
          this.$http.jsonp('http://list.meilishuo.com/search?frame=0&page=1&sort=pop&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=295931cb-b612-40e6-bd95-2d719c4df926&fcid=10058862&_=1499949707569', {jsonp: 'callback'}).then(function (res) {
            this.active2="none";
            this.active="block",
            this.arry1 = res.body.data.list;
            this.arry2 = res.body.data.list;
            console.log(res.body.data.list);
          });
        }
      }

  }
</script>

<style scoped>
  #skrt {
    height: 111%;
    background: #F2F5F8;
    overflow: auto;
  }

  #skrt > #box1 {
    background: white;
  }

  #skrt > #box1 .title {
    width: 100%;
    text-align: left;
    font-size: .4rem;
    padding: .1rem .2rem;
  }

  #skrt ul {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }

  #skrt ul > li {
    width: 25%;
    border-top: 1px solid gainsboro;
    border-right: 1px solid gainsboro;
  }

  #skrt ul > li > p {
    font-size: .25rem;
    padding-bottom: .1rem;
    text-align: center;
  }

  #skrt ul > li > img {
    width: 100%;
    display: block;
  }

  #price {
    width: 100%;
    background: white;
    position: fixed;
    z-index: 99;
  }

  #price > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  #price > div > p {
    width: 28%;
    font-size: .3rem;
  }

  #price > div:nth-of-type(2) > p {
    background: gainsboro;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #price > div:nth-of-type(2) {
    height: .7rem;
    align-items: center;
    padding: 0 .3rem;
  }

  #price > div:nth-of-type(1) {
    height: .9rem;
    align-items: center;
  }

  #price > div img {
    height: .39rem;
  }

  .price {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .price > img {
    margin-left: .4rem;
  }

  #price > div:nth-of-type(3) > p {
    height: .5rem;
  }

  #price > div:nth-of-type(3) {
    align-items: center;
    padding: .18rem .5rem;
  }

  #price > div input {
    width: 100%;
    height: 100%;
    outline: none;
    border-radius: 4%;
    border: 1px solid gainsboro;
  }

  #price > div button {
    height: 100%;
    width: 46%;
    background: none;
    border: 1px solid red;
    border-radius: 3%;
    color: red;
  }

  #price > div button:last-of-type {
    background: #ff5b76;
    color: white;
  }
</style>
