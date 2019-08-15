<template>
    <v-card
    max-width="900"
    class="mx-auto">
        <v-container class="pa-0">
          <v-row class= "pl-6">
            <v-col>
              <v-card-title class="justify-center">Login now</v-card-title>
            <v-row class="btn-container">
              <v-btn color="blue" class="btn-facebook btn-social">Login with Facebook</v-btn>
              <v-btn class="btn-google btn-social">Login with Google</v-btn>
              </v-row>
            <v-divider horizontal></v-divider>
            <v-row class="inputs-container">
                <v-text-field
                  label="Email"
                  solo
                  class="login-input"
                />
                <v-text-field
                  label="Password"
                  solo
                  class="login-input"
                />
            </v-row>
            <router-link to="{name: 'reset'}" class="links">Forgot Password?</router-link>
            <router-link to="{name: 'register'}" class="links">Do not have an account?</router-link>
            <v-row><v-btn color="green" class="btn-login">Login</v-btn></v-row>
            </v-col>
            <v-col class="shrink pt-0 pb-0">
        <v-img
          height="520"
          width="150"
          src="../../assets/login.jpg"
          class="login-img"
        ></v-img>
      </v-col>
          </v-row>
        </v-container>
  </v-card>
</template>

<style lang='sass' scoped>
.v-application .py-4, .pl-4
  padding: 0
.btn-container
  width: 300px
  margin: 1rem auto 2rem
.btn-social
  height: 30px
  width: 100%
  margin-top: 1rem
.btn-facebook
  color: #fff !important
.btn-google
  color: #579FE4 !important
.btn-google,.btn-facebook
  font-size: 10px !important
.login-img
  border-radius: 0 5px 5px 0
.links
  text-decoration: none
  color: #0C0D10 !important
  font-size: 14px
  padding: 0 10px
  font-weight: bold
  
.auth-wrapper
  margin-top: 5rem
  width: 600px
.inputs-container
  with: 500px
  display: flex
  justify-content: center
  margin: 1rem 0

.login-input
  width: 100% !important
  flex: 0 auto !important
.btn-login
  width: 50%
  color: #fff !important
  margin: 1rem auto
</style>