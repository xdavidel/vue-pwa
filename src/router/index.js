import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import UserDetails from '@/components/UserDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: List
    }, {
      path: '/user/:id',
      name: 'userDetails',
      component: UserDetails
    }
  ]
})
