<template>
    <v-card
    width="70%"
    height = '500px'
    class="mx-auto">
        <v-container class="pa-0">
          <v-row class= "pl-6">
            <v-col>
              <v-card-title class="justify-center login">Login now</v-card-title>
            <v-row class="btn-container">
              <v-btn color="blue" class="btn-facebook btn-social"><v-icon>mdi-facebook</v-icon>Login with Facebook</v-btn>
              <v-btn class="btn-google btn-social"><v-icon color="red">mdi-google</v-icon>Login with Google</v-btn>
              </v-row>
            <v-divider horizontal>OR</v-divider>
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
            <v-layout>
            <router-link :to="{ name: 'reset' }" class="links">Forgot Password?</router-link>
            <router-link :to="{ name: 'signup' }" class="links">Do not have an account?</router-link>
            </v-layout>
            <v-row><v-btn color="green" class="btn-login"><router-link :to="{ name: 'profile'}">Login</router-link></v-btn></v-row>
            </v-col>
            <v-col class="shrink pt-0 pb-0">
              <v-img
                height="500"
                width="150"
                src="../../assets/login.jpg"
                class="login-img">
              </v-img>
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
  margin: 0 auto
  font-weight: bold
.inputs-container
  with: 100%
  height: 120px
  display: flex
  justify-content: center
  margin: 2rem 0 1rem
.inputs-container
.login-input
  width: 80%
  height: 20px !important
  flex: 0 auto !important
.btn-login
  width: 30%
  color: #fff !important
  margin: 1.5rem auto
.login
  font-weight: bold
.v-btn > .v-btn__content .v-icon
    font-size: 20px !important
    margin: 0 5px
@media only screen and (max-width: 740px)
  .login-img
    display: none
.btn-login a
  color: white !important
</style>