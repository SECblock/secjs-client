<template>
  <v-content>
    <v-container>
      <v-data-table :headers= "headers" :items= "transactions" class="elevation-1">
        <template slot="items" slot-scope="props">
          <td>{{ props.item.Value }}</td>
          <td class="text-xs-right">{{ props.item.TxFrom }}</td>
          <td class="text-xs-right">{{ props.item.TxTo }}</td>
        </template>
      </v-data-table>
    </v-container>
    <v-btn fab bottom right fixed dark color="red accent-3" @click= "navBack">
      <v-icon>chevron_left</v-icon>
    </v-btn>
  </v-content>
</template>


<script>
import Vue from "vue"
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css"
Vue.use(Vuetify, {
  iconfont: "mdi"
})

export default {
  name: "transaction-history",
  props: {
    walletid: String
  },
  data() {
    return {
      headers: [
        {
          text: "Amount",
          sortable: false,
          value: "name"
        },
        { text: "From",value: "from" },
        { text: "To", value: "to" },
        { text: "Status", value: "status" }
      ],
      transactions: []
    }
  },

  created() {
    let userToken = window.localStorage.getItem('userToken')
    this.$JsonRPCClient.request('getTokenTxForUser', {token: userToken, address: this.walletid}, (err, response) => {
      this.transactions = response.result.info
    })
  },

  methods: {
    navBack() {
      this.$router.go(-1)
    }
  }
}
</script>

