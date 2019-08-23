<template>
    <v-flex class="justify-center">
    <v-card>
        <v-card-title class="justify-center">My Profile</v-card-title>
        <v-card-text>{{ name }}</v-card-text>
        <v-btn
            color="#5269BC"
        ><router-link :to="{name: 'resume'}"> My Resume</router-link>
        </v-btn>

    </v-card>
    </v-flex>
</template>

<script>
export default {
    data () {
        return {
            name: 'Name'
        }
    }
}
</script>
<style lang="sass" scoped>
.v-card__title
    padding: 3rem 0 0.5rem
    font-weight: 500 !important
.v-card__text
    text-align: center
.v-btn 
    a
        color: white !important
.v-card
    width: 100%
    background-color: lightgray
    height: 200px
</style>