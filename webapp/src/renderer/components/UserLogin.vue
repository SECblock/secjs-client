<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height v-if= "!busy">
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
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                  <v-btn slot="activator" dark color="primary">Create Account</v-btn>
                  <v-card>
                    <v-toolbar dark color="primary">
                      <v-btn icon dark @click="dialog = false">
                        <v-icon>close</v-icon>
                      </v-btn>
                      <v-toolbar-title>Build your Account</v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-toolbar-items>
                        <v-btn dark flat @click.native="onSaveAccount">Create</v-btn>
                      </v-toolbar-items>
                    </v-toolbar>
                    <v-card-text>
                      <v-container grid-list-md>
                        <v-layout wrap>
                          <v-flex xs12>
                            <v-text-field label="User Name" required></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field label="Password" required></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm6 md4>
                            <v-text-field label="Legal first name" required></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm6 md4>
                            <v-text-field label="Legal last name" required></v-text-field>
                          </v-flex>
                        </v-layout>       
                        <v-flex xs12>
                          <v-text-field label="Email Adress" required></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                          <v-text-field label="Mobil" required></v-text-field>
                        </v-flex>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </v-card-actions>
            </v-card>
          </v-flex>
          
        </v-layout>
      </v-container>
      <v-dialog persistent v-model= "busy" max-width= "200px">
            <v-card>
              <v-card-text>
                <div class="text-xs-center">
                <v-progress-circular :size="50" :width="7" color="purple" indeterminate></v-progress-circular>
              </div>
              </v-card-text>
            </v-card>
          </v-dialog>
    </v-content>
  </v-app>
</template>


<script>
import Vue from 'vue'

export default {
  data: () => ({
    dialog: false,
    busy: false,
    drawer: null,
    username: '',
    password: '',
    loginError: false,
    createAccount: {
      userName: '',
      userPassword: '',

    }
  }),

  created() {
    this.busy = true
    let token = window.localStorage.getItem('userToken')
    let decoded

    setTimeout(() => {
      if (token){
        decoded = this.$JWT.verifyToken(token)
        if (decoded !== '') {
            this._navToAccountDetail({
            userID: decoded.userID
          })
        } else {
          this._userAuthRequest()
        }
        
      }
      this.busy = false
    }, 500);

    
  },

  methods: {
    onLoginClick: function(oEvent){
      if (this.username !== "" && this.password !== "") {
        this._userAuthRequest()
      }
    },

    _userAuthRequest: function(){
 this.$JsonRPCClient.request('userLogin', { account: this.username, password: this.password }, (err, response) => {
          console.log(response)
          if (err) {
            this.loginError = true
            return
          }
          if (response.result.status === 'success') {
            window.localStorage.setItem('userToken', response.result.account.token)         
            this._navToAccountDetail({
              userID: response.result.account.userID,
              username: response.result.account.username,
              email: response.result.account.email,
              telefon: response.result.account.telefon
            })
          } else {
            this.loginError = true
          }
        })
    },

    _navToAccountDetail: function(params) {
      this.$router.push({
        name: 'menu-header',
        params: {userID: params.userID},
        query: {username: params.username, email: params.email, telefon: params.telefon}
      })
    },

    onSaveAccount: function(oEvent) {

    }
  }
}
</script> 