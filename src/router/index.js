import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import login from '../view/login'
import endHeader from '../view/endHeader'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: endHeader
    }
  ]
})
