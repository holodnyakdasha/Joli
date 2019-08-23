<template>
  <v-card
    flat
    height="60px"
  >
    <v-toolbar>

      <v-toolbar-title>Joli</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn 
      class="btn-login"
      color="white"
      >
      <router-link :to="{ name: 'login' }">Login</router-link>
      </v-btn>

    <v-btn 
        class="btn-post btn"
        color="red"
    >
        Post a job
      </v-btn>
    </v-toolbar>
  </v-card>
</template>
<script>
export default {
    
}
</script>
<style lang="sass">
.v-content__wrap
    background-color: #fff
.btn
    color: white !important
.btn-login
    border: none !important
    box-shadow: none !important
.btn-post
    background-color: red
    margin-left: 10px
a
  text-decoration: none
  color: black !important
</style>