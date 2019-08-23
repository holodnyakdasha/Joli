<template>
  <v-container>
    <v-layout wrap>
      <div class="auth-wrapper">
        <router-view :key="currentPath" :auth-route="currentPath" />
      </div>
    </v-layout>
  </v-container>
</template>
<script>
export default {
    data: () => ({
    currentPath: '',
    formTitle: ''
  }),

  watch: {
    $route(to, from) {
      this.currentPath = to.name
    }
  },

  mounted() {
    this.currentPath = this.$router.currentRoute.name
  }
}
</script>


<style lang='sass'>
.auth-wrapper
  width: 900px
  margin: 2rem auto
  @media only screen and (max-width: 600px)
    width: 100%

.container
    @media only screen and (max-width: 600px)
      background: white
      padding: 0
      margin: 0
      max-width: 100%

.auth-card
  @media only screen and (max-width: 600px)
    box-shadow: none
  border-radius: 1.5rem !important
  padding: 1rem 3rem
  max-width: 80rem

.btn-link span
  color: red !important
  text-transform: uppercase

.btn-link
  margin-top: 3rem !important
  font-size: 1.4rem

@media only screen and (min-width: 960px)
  .auth-card
    padding: 2rem 5rem

</style>
