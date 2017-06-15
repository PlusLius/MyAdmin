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
        {path: "/",name:'publicSignal',title:'publicSignal',component:endContent},
        {path: 'publicSignal',name:'publicSignal',title:'publicSignal',component:endContent},
        {path: 'device',name:'device',title:'device',component:endContent},
        {path: 'publicSignalEdit',name:'publicSignalEdit',component:endContent},
        {path: 'deviceEdit',name:'deviceEdit',component:endContent},
      ]
    }
  ]
})
