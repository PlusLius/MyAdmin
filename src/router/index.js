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
        {path: "/",name:'publicSignal',  meta: { title: 'publicSignal' , conHeadFont:"公众号管理"},component:endContent},
        {path: 'publicSignal',name:'publicSignal',  meta: { title: 'publicSignal',conHeadFont:"公众号管理"},component:endContent},
        {path: 'device',name:'device',  meta: { title: 'device',conHeadFont:"设备管理"},component:endContent},
        {path: 'publicSignalEdit',  meta: { title: 'publicSignal' ,isHidden:true,conHeadFont:"公众号添加"},name:'publicSignalEdit',component:endContent},
        {path: 'deviceEdit',  meta: { title: 'device' ,isHidden:true,conHeadFont:"设备添加"},name:'deviceEdit',component:endContent},
      ]
    }
  ]
})
