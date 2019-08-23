<template>
    <v-flex class="justify-center">
    <v-card>
        <v-card-title class="justify-center">My Profile</v-card-title>
        <v-card-text>{{ name }}</v-card-text>
        <v-card-actions class="justify-center">
        <v-btn
            color="#5269BC"
        ><router-link :to="{name: 'resume'}"> My Resume</router-link>
        </v-btn>
        </v-card-actions>
        <v-card-text>{{ status }}</v-card-text>
    </v-card>
    <v-flex>
        <list-component />
    </v-flex>
    </v-flex>
</template>

<script>
import ListComponent from '../profile/ListComponent'
export default {
    data () {
        return {
            name: 'Amil Asokan',
            status: '*Resume not added'
        }
    },
    components: {
        ListComponent
    }
}
</script>
<style lang="sass" scoped>
.v-card__title
    padding: 2rem 0 0
    font-weight: 500 !important
.v-card__text
    text-align: center
    padding: 0
.v-btn 
    margin-top: 1rem
    a
        color: white !important
.v-card
    width: 100%
    background-color: #E5E6EA
    height: 200px
</style>