// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'normalize.css/normalize.css'
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css';// Progress 进度条 样式
import store from "./store/index"
import "./mock/mock"

Vue.use(ElementUI);

router.beforeEach((to, from, next)=>{
    NProgress.start();
    setTimeout(()=>{
         next()
         NProgress.done();
    },300)
})
// NProgress.start();


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
