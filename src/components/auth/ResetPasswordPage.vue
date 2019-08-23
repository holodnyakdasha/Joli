<template>
    <v-card
    width="70%"
    height = '500px'
    class="mx-auto">
        <v-container class="pa-0">
          <v-row class= "pl-6">
            <v-col>
              <v-card-title class="justify-center login">FORGOT PASSWORD</v-card-title>
              <v-card-text>{{ text }}</v-card-text>
            <v-row class="inputs-container">
                <v-text-field
                  label="Email"
                  solo
                  class="login-input"
                />
            </v-row>
            <v-row><v-btn color="red" class="btn-login">Login</v-btn></v-row>
            <v-layout>
            <router-link :to="{ name: 'login' }" class="links">Go back to Login</router-link>
            </v-layout>
            </v-col>
            <v-col class="shrink pt-0 pb-0">
        <v-img
          height="500"
          width="150"
          src="../../assets/login.jpg"
          class="login-img"
        ></v-img>
      </v-col>
          </v-row>
        </v-container>
  </v-card>
</template>

<script>
export default {
    data () {
        return {
            text: 'Type in your email below and we will send you a mail with instructions to reset your password'
        }
    }
}
</script>

<style lang='sass' scoped>
.v-application .py-4, .pl-4
  padding: 0
.v-card__title
    margin: 4.5rem 0 1rem
.v-card__text
    text-align: center
    color: gray

.login-img
  border-radius: 0 5px 5px 0
.links
  text-decoration: none
  color: black !important
  font-size: 14px
  margin: 0 auto
  font-weight: bold
.inputs-container
  with: 400px
  height: 70px
  display: flex
  justify-content: center
  margin: 1rem 0 0
.login-input
  width: 80%
  height: 20px !important
  flex: 0 auto !important
.btn-login
  width: 30%
  color: #fff !important
  margin: 1rem auto
.login
  font-weight: bold
.v-btn > .v-btn__content .v-icon
    font-size: 20px !important
    margin: 0 2px
</style>