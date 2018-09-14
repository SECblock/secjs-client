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
      path: '/login/:user',
      name: 'user-account',
      component: require('@/components/UserAccount').default
    },
    {
      path: '/transactions/:walletid',
      name: 'transaction-history',
      component: require('@/components/TransactionHistory').default,
      props: true
    },
    {
      path: '/details/:walletid',
      name: 'wallet-details',
      component: require('@/components/WalletDetails').default,
      props: true
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
