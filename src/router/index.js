import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
// import endHeader from '../components/endHeader'
import view from "../view/index"
import endContent from "../components/endContent"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/menu',
      name:'menu',
      component:view,
      children:[
        {path: "/",name:'publicSignal',component:endContent},
        {path: 'publicSignal',name:'publicSignal',component:endContent},
        {path: 'device',name:'device',component:endContent}
      ]
    }
  ]
})
