// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../static/css/base.css'  //引入重置样式
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';   //引入axios
Vue.prototype.$axios = axios;  //把axios挂载在vue的原型下
import VueAwesomeSwiper from 'vue-awesome-swiper'  //引入swiper
// require styles
import 'swiper/dist/css/swiper.css'
//引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(VueAwesomeSwiper)      //使用swiper
Vue.use(ElementUI);   //使用ElementUI
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
