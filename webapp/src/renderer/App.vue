<template>
  <div>
  <v-app>
      <v-content fill-height>
      <v-flex xs12 md12 sm12>
  <div>
    <router-view></router-view>
  </div>
      </v-flex>
      </v-content>
  </v-app>
  </div>
</template>

<script>
import Vue from 'vue'
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
  },
  data() {
    return {
      activeTab: 0,
      activeSubTab: 0,
      showBooks: false
    }
  },
  methods: {
  }
}
</script>

<style>
/* CSS */
</style>
