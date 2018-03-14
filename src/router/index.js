import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import login from '@/components/login/login'
import header from '@/components/header/header'
import footer from '@/components/footer/footer'
import index from '@/components/index/index'
import register from '@/components/register/register'
import allthing from '@/components/allthing/allthing'
import aboutFlower from '@/components/aboutflower/aboutflower'
import pay from '@/components/pay/pay'

Vue.use(Router)
Vue.use(Resource)

export default new Router({
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path:'/header',
      component:header
    },
    {
      path:'/footer',
      component:footer
    },
    {
      path:'/index',
      component:index
    },
    {
      path:'/',
      component:index
    },
    {
      path:'/register',
      component:register
    },
    {
      path:'/allthing',
      component:allthing
    },
    {
      path:'/about',
      component:aboutFlower
    },
    {
      path:'/pay',
      component:pay
    },



  ]
})
