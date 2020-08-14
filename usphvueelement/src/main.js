import Vue from 'vue'
import store from './store'    //引入 vuex
import App from './App' 
//导入elementUi组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import VueElementadminLayout from 'vue-element-admin-layout';

//导入
import axios from 'axios'
import VueAxios from 'vue-axios'  
//导入路由
import router from './router'  
Vue.use(ElementUI);
Vue.use(VueAxios, axios);

// 解决页面路由重复点击时报错，场景：如多次点击导航菜单项时会报红色错误
const originalPush = Vue.prototype.push
Vue.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

Vue.config.productionTip = false 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  //配置路由
  router,
  store,
  render: h => h(App)
})
