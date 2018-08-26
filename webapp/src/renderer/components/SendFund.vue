<template>
  <v-container fluid grid-list-xl>
    <v-layout column wrap justify-start>
        <v-layout row wrap md2>
          <v-flex xs6 md5>
            <v-text-field label='From' append-icon='mdi-account' box>
            </v-text-field>
          </v-flex>
          <v-flex xs6 md5 offset-md2>
            <v-text-field label='To' append-icon='mdi-account' box>
            </v-text-field>
          </v-flex>
      </v-layout>

      <v-layout column wrap md2>
        <v-flex xs12 md5>
          <v-text-field label='Amount' append-icon='mdi-send' box v-model = "amount">
          </v-text-field>
        </v-flex>
        <v-flex xs12 md5>
          <p>You want to pay {{ amount }}</p>  
        </v-flex>
        <v-flex>
          <v-btn color='info'>
            Send
          </v-btn>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify, {
  iconfont: "mdi"
});

export default {
  data () {
    return {
      amount: null
    }
    
  }
};
</script>