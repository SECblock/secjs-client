<template>
<v-content>
      <v-container grid-list-xs>
        <v-layout column>
          <v-layout row v-for= "(wallet, item) in userWallets" :key= "item" justify-center>
            <v-flex xs10>
              <v-card color="primary">
                <v-list>
                    <v-list-group prepend-icon="local_activity" no-action>
                      <v-list-tile avatar slot="activator">
                        <v-list-tile-content>
                          <v-list-tile-title>{{wallet.walletBalance}}</v-list-tile-title>
                          <v-list-tile-sub-title class="text-truncate">{{wallet.walletName}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        
                      </v-list-tile>
                      <v-list-tile v-for= "(tile, i) in wallet.subListTiles" :key= "i" @click= "clicktransactions(tile, wallet, $event)">
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
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify, {
  iconfont: "mdi"
});

export default {
  name: "user-account",
  data: () => ({
    userName: '',
    userID: '',
    email: '',
    telefon: '',
    subListTiles: [
      ["Wallet Details", "user"],
      ["Transaction History", "history"],
      ["Remove Wallet", "remove"]
    ],
    userWallets: []
  }),

  created() {
    this.userID = this.$route.params.user
    this.userName = this.$route.query.username
    this.email = this.$route.query.email
    this.telefon = this.$route.query.telefon
    this.$JsonRPCClient.request(
      "getUserWallets",
      { userID: this.userID },
      (err, response) => {
        if (err) {
          return
        }
        response.result.userWallets.forEach(wallet => {
          this.userWallets.push({
            walletID: wallet.walletID,
            walletName: `Wallet ${wallet.walletAdress}`,
            walletBalance: `Balance ${wallet.balance}`,
            subListTiles: this.subListTiles
          })
        })
      }
    )
  },

  computed: {
    iconColor() {
      return "red"
    }
  },

  methods: {
    clicktransactions(tile, wallet, event) {
      let walletID = wallet.walletID
      if (tile[0] === "Transaction History") {
       this.$router.push({name: "transaction-history", params: {walletid: walletID}})
      } else if (tile[0] === "Remove Wallet") {
        console.log("click" + index)
        this.userWallets.splice(index, 1)
      }
    },
    userLogOut() {
      this.$router.go(-1);
    },
    addNewWallet() {
      this.userWallets.push({
        userName: "Wallet 2",
        subListTiles: [
          ["Account Details", "user"],
          ["Transaction History", "history"],
          ["Remove Wallet", "remove"]
        ]
      });
    }
  }
};
</script>