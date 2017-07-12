// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import Home from './views/home'
import FenLei from './views/fenlei'
import Mine from './views/mine'
import ShopCar from './views/shopcar'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueAwesomeSwiper);

const  routes =[
  {path:'/',component:Home},
  {path:'/fenlei',component:FenLei},
  {path:'/mine',component:Mine},
  {path:'/shopcar',component:ShopCar},
  {path:'/home',component:Home},

];
const  router = new VueRouter({
  routes
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
});
