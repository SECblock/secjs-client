<template>
  <!-- <div id="app" class="container">  
    <section>
        <b-tabs v-model="activeTab">
          <b-tab-item label='Account'>
            <div class='block'>
              <user-login></user-login>
            </div>
            <div>
              
            </div>
          </b-tab-item>
          <b-tab-item label='Wallet'>
          </b-tab-item>
        </b-tabs>
    </section>
  </div> -->
  <v-tabs
  color="cyan"
  dark
  slider-color="yellow"
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
</template>


<script>
import Vue from "vue"
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css"
import UserLogin from "./UserLogin"
import SendFund from './SendFund'

Vue.use(Vuetify, {
  iconfont: "mdi"
})

export default {
  name: "menu-header",
  methods: {
    switvh() {
      return 99;
    },
    q() {
      return { codigo: 125 };
    }
  },
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
};
</script>

<style>
</style>
