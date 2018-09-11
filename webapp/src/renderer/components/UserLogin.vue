<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex xs12 sm10 md4>
            <v-card class="elevation-12">   
              <v-card-text>
                <v-form>
                  <v-text-field id="username" v-model = "username" prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                  <v-text-field id="password" v-model = "password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-text transition="slide-y-reverse-transition" v-if = "loginError">
                <div>
                  Password or username is false.
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" v-on:click = "onLoginClick">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Vue from 'vue'

export default {
  data: () => ({
    drawer: null,
    username: '',
    password: '',
    loginError: false
  }),
  methods: {
    onLoginClick: function(oEvent){
      if (this.username !== "" && this.password !== "") {
        this.$JsonRPCClient.request('userLogin', { account: this.username, password: this.password }, (err, response) => {
          console.log(response)
          if (err) {
            this.loginError = true
            return
          }
          if (response.result.status === 'success') {           
            this.$router.push({
              name: 'user-account', 
              params: {user: response.result.account.userID}, 
              query: {username: response.result.account.email, email: response.result.account.email, telefon: response.result.account.telefon}
            })
          } else {
            this.loginError = true
          }
        })
      }
    }
  }
}
</script> 