<template>
  <div>
  <v-app>
      <v-content fill-height>
      <v-flex xs12 md12 sm12>
        <v-tabs
  color="primary"
  dark
  slider-color="yellow"
  centered
  height="80%"
>
  <v-tab ripple>
    Wallet
  </v-tab>
  <v-tab ripple>
    Send Fund
  </v-tab>
  <v-tab ripple>
    UserInfo
  </v-tab>
  <v-tab-item>
    <router-view @successLog = "successLogFn"></router-view>
  </v-tab-item>
  <v-tab-item>
    <send-fund></send-fund>
  </v-tab-item>
    <v-tab-item>
    <user-info :userName = "userName" :userID = "userID" :telefon = "telefon" :email = "email"></user-info>
  </v-tab-item>
</v-tabs>
      </v-flex>
      </v-content>
  </v-app>
  </div>
</template>

<script>
import Vue from 'vue'
import UserLogin from './components/UserLogin'
import SendFund from './components/SendFund'
import UserInfo from './components/UserInfo'
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css"

import JsonRPCClient from './lib/jayson-rpc-vue'

Vue.use(Vuetify, {
  iconfont: "mdi"
})

Vue.use(JsonRPCClient, {
  useSSL: false,
  url: 'http://localhost:3000'
})

export default {
  name: "webapp",
  components: {
    UserLogin,
    SendFund,
    UserInfo
  },
  data() {
    return {
      activeTab: 0,
      activeSubTab: 0,
      showBooks: false,
      userName: '',
      userID: '',
      telefon: '',
      email: ''
    }
  },
  methods: {
    successLogFn (data) {
      this.userName = data.username
      this.userID = data.userID
      this.telefon = data.telefon
      this.email = data.email
    }
  }
}
</script>

<style>
/* CSS */
</style>
