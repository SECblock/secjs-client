<template>
  <div>
  <v-app>
      <v-content fill-height>
      <v-flex xs12 md12 sm12>
        <v-tabs
  color="cyan"
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
  <v-tab-item>
    <router-view></router-view>
  </v-tab-item>
  <v-tab-item>
    <send-fund></send-fund>
  </v-tab-item>
</v-tabs>
      </v-flex>
      </v-content>
  </v-app>
  </div>
</template>

<script>
import Vue from "vue";
import UserLogin from "./components/UserLogin"
import SendFund from './components/SendFund'
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify, {
  iconfont: "mdi"
})

export default {
  name: "webapp",
  components: {
    UserLogin,
    SendFund
  },
  data() {
    return {
      activeTab: 0,
      activeSubTab: 0,
      showBooks: false
    }
  }
}
</script>

<style>
/* CSS */
</style>
