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
      path: '/login/:userpublickey',
      name: 'user-account',
      component: require('@/components/UserAccount').default,
      props: true
      // beforeRouteUpdate: (to, from, next) => {
      //   console.log(this.$route.params)
      // }
    },
    {
      path: '/transactions',
      name: 'transaction-history',
      component: require('@/components/TransactionHistory').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
