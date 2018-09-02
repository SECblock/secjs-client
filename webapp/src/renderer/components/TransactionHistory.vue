<template>
  <v-content>
    <v-container>
      <v-data-table :headers= "headers" :items= "transactions" class="elevation-1">
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.from }}</td>
          <td class="text-xs-right">{{ props.item.to }}</td>
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
  data() {
    return {
      headers: [
        {
          text: "Name",
          sortable: false,
          value: "name"
        },
        { text: "From",value: "from" },
        { text: "To", value: "to" }
      ],
      transactions: [
        {
          value: false,
          name: "0x12038asodifj90380498109233sdfa2",
          from: "xiaoli",
          to: "afei"
        },
        {
          value: false,
          name: "0x12038asodifj90380498109233sdfa2",
          from: "xiaoli",
          to: "afei"
        },
        {
          value: false,
          name: "0x12038asodifj90380498109233sdfa2",
          from: "xiaoli",
          to: "afei"
        }
      ]
    }
  },
  methods: {
    navBack() {
      this.$router.go(-1)
    }
  }
}
</script>

