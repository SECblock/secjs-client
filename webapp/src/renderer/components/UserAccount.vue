<template>
  
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card color="primary">
          <v-list>
              <v-list-group prepend-icon="local_activity" no-action>
                <v-list-tile avatar slot="activator">
                  <v-list-tile-title>User 1</v-list-tile-title>
                </v-list-tile>
                <v-list-tile v-for= "(tile, i) in sublisttiles" :key= "i" @click= "">
                  <v-list-tile-title v-text= "tile[0]"></v-list-tile-title>
                  <v-list-tile-action v-icon= "tile[1]"> </v-list-tile-action>
                </v-list-tile>
              </v-list-group>
          </v-list>
        </v-card>
        <v-card color="primary">
          <v-list>
              <v-list-group prepend-icon="account_circle" value="true">
                <v-list-tile avatar slot="activator">
                  <v-list-tile-title>User 2</v-list-tile-title>
                </v-list-tile>
              </v-list-group>   
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'user-account',
    data: () => ({
      sublisttiles: [
        ['Account Details', 'restaurant'],
        ['Transaction History', 'mdi-add']
      ]
    })
    
  }
</script>