<template>
<v-content>
      <v-container grid-list-xs>
        <v-layout column justify-space-around>
          <v-layout row v-for= "(wallet, item) in userWallets" :key= "item" justify-center>
            <v-flex xs5>
            <v-card color="primary">
              <v-list>
                  <v-list-group prepend-icon="local_activity" no-action>
                    <v-list-tile avatar slot="activator">
                      <v-list-tile-title>{{wallet.userName}}</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile v-for= "(tile, i) in wallet.subListTiles" :key= "i" @click= "clicktransactions(tile, item, $event)">
                      <v-list-tile-title v-text= "tile[0]"></v-list-tile-title>
                      <v-list-tile-action v-if= "tile[1] === 'history' "><v-icon dark color="green">{{tile[1]}}</v-icon></v-list-tile-action>
                      <v-list-tile-action v-if= "tile[1] === 'remove' "><v-icon dark color="red">{{tile[1]}}</v-icon></v-list-tile-action>
                    </v-list-tile>
                  </v-list-group>
              </v-list>
            </v-card>
          </v-flex>
          </v-layout>
          
          
        </v-layout>
      </v-container>
      <v-btn fab bottom right fixed dark color="red accent-3" @click= "userLogOut">
        <v-icon>chevron_left</v-icon>
      </v-btn>
      <v-btn fab bottom left fixed dark color="indigo" @click= "addNewWallet">
        <v-icon dark>add</v-icon>
      </v-btn>
</v-content>

</template>

<script>
  import Vue from 'vue'
  import Vuetify from "vuetify";

  Vue.use(Vuetify, {
    iconfont: "mdi"
  });

  export default {
    name: 'user-account',
    data: () => ({
      userWallets: [
        {
          userName: 'Wallet 1',
          subListTiles: [
            ['Account Details', 'user'],
            ['Transaction History', 'history'],
            ['Remove Wallet', 'remove']
          ]
        }
      ]
    }),

    computed: {
      iconColor() {
        return "red"
      }
    },

    methods: {
      clicktransactions(tile, index, event) {
        if(tile[0] === "Transaction History"){
          this.$router.push('transactions')
        } else if (tile[0] === "Remove Wallet") {
          console.log('click' + index)
          this.userWallets.splice(index, 1)
        }
      },
      userLogOut(){
        this.$router.go(-1)
      },
      addNewWallet(){
        this.userWallets.push({
          userName: 'Wallet 2',
          subListTiles: [
            ['Account Details', 'user'],
            ['Transaction History', 'history'],
            ['Remove Wallet', 'remove']
          ]
        })
      }
    }
    
  }
</script>