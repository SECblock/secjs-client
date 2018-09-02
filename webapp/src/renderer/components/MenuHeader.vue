<template>
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
</template>


<script>
import Vue from "vue"
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css"

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
