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
import Skrt from './components/skrt'
import Xiang from './components/xiang'
import Sousuo from './components/sousuo'
import logon from './components/logon'
import zhuce from './components/zhuce'
import people from './components/people'
import Message from './components/message'
import Message1 from './components/message1'
import Message2 from './components/message2'
import Message3 from './components/message3'


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
  {path:'/skrt',component:Skrt},
  {path:'/xiang',component:Xiang},
  {path:'/sousuo',component:Sousuo},
  {path:'/logon',component:logon},
  {path:'/zhuce',component:zhuce},
  {path:'/people',component:people,children:[
    {
      path:'',
      name: 'message',
      component:Message
    },
    {
    path:'message',
      name: 'message',
      component:Message
    },
    {
      path:'message1',
      name: 'message1',
      component:Message1
    },
    {
      path:'message2',
      name: 'message2',
      component:Message2
    },
    {
      path:'message3',
      name: 'message3',
      component:Message3
    }

    ]}

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
