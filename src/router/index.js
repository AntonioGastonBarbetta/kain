import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import List from '../components/List'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/List',
      name: 'List',
      component: List
    }
  ]
})
