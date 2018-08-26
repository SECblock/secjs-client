import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'user-login',
      component: require('@/components/UserLogin').default
    },
    {
      path: '/login',
      name: 'user-account',
      component: require('@/components/UserAccount').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
