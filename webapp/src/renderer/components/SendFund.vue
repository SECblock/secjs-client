<template>
  <v-container fluid grid-list-xl>
    <v-layout column wrap justify-start>
        <v-layout row wrap md2>
          <v-flex xs6 md5>
            <v-text-field label='From' append-icon='mdi-account' box v-model = "myWalletAddress">
            </v-text-field>
          </v-flex>
          <v-flex xs6 md5 offset-md2>
            <v-text-field label='To' append-icon='mdi-account' box v-model = 'goalWalletAddress'>
            </v-text-field>
          </v-flex>
      </v-layout>

      <v-layout column wrap md2>
        <v-flex xs12 md5>
          <v-text-field label='Amount' append-icon='mdi-send' box v-model = "amount">
          </v-text-field>
          <v-text-field label='Gas' append-icon='mdi-send' box v-model = "gas">
          </v-text-field>
        </v-flex>
        
        
        <v-flex>
          <p>You want to pay {{ amount }} with gas {{gas}}</p>  
          <v-alert :value="balanceError" type="error" transition="scale-transition">
            You don't have enough balance. Current balance {{walletBalance}}.
          </v-alert>
          <v-alert :value="transactionSuccess" type="success" transition="scale-transition">
            {{responseMessage}}.
          </v-alert>
          <v-btn color='info' round @click="sendTransaction">
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
import {EventBus} from "../lib/EventBus.js"

Vue.use(Vuetify, {
  iconfont: "mdi"
});

export default {
  props: ['myWalletAddress', "walletBalance"],
  data () {
    return {
      amount: 0,
      gas: 0,
      balanceError: false,
      goalWalletAddress: null,
      transactionSuccess: false,
      responseMessage: '',
      txHashBuffer: []
    }
  },
  methods: {
    sendTransaction: function() {
      let userToken = window.localStorage.getItem('userToken')
      if (window.localStorage.getItem('tokenTransactions') && window.localStorage.getItem('tokenTransactions') != '') {
        this.txHashBuffer = JSON.parse(window.localStorage.getItem('tokenTransactions'))
      } else {
        this.txHashBuffer = []
      }
      if(this.amount > this.walletBalance) {
        this.balanceError = true
      } else {
        this.balanceError = false

        this.$JsonRPCClient.request('newTokenChainTx', {token: userToken, From: this.myWalletAddress, To: this.goalWalletAddress, value: this.amount, TxFee: this.gas}, (err, response) => {
          if (response.result.status === 'true') {
            this.transactionSuccess = true
            this.txHashBuffer.push(response.result.tokenTxHash)
            window.localStorage.setItem('tokenTransactions', JSON.stringify(this.txHashBuffer))
            this.responseMessage = response.result.info
            EventBus.$emit('updateUserBalance', this.amount)
          }
        })
      }
      
    }
    
  }
};
</script>