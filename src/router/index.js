import Vue from 'vue'
import Router from 'vue-router'
// import login from '../components/login'
// import endHeader from '../components/endHeader'
import view from "../view/index"
import endContent from "../components/endContent"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: view
    },
    // {
    //   path: '/',
    //   component:
    // }
  ]
})
