<template>
  <!-- <div id="app">
    <menu-header></menu-header>
    <router-view></router-view>
  </div> -->
  <v-app>
    <v-container fluid>
      <v-flex align-center>
        <menu-header></menu-header>
      </v-flex>
    </v-container>
  </v-app>  
</template>

<script>
import Vue from "vue";
import Buefy from "buefy";
import "buefy/lib/buefy.css";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Buefy);
Vue.use(Vuetify, {
  iconfont: "mdi"
});

import MenuHeader from "./components/MenuHeader";
export default {
  name: "webapp",
  components: {
    MenuHeader
  }
}
</script>

<style>
/* CSS */
</style>
