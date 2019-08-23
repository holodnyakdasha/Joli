<template>
    <v-card>
      <v-list
        :disabled="disabled"
        :dense="dense"
        :flat="flat"
        :subheader="subheader"
        :inactive="inactive"
        :sub-group="subGroup"
        :nav="nav"
        :avatar="avatar"
        :rounded="rounded"
      >
        <v-subheader>MY JOB LISTINGS</v-subheader>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-avatar v-if="avatar">
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
</template>
<script>
  export default {
    data: () => ({
      item: 5,
      items: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Sales Operator'        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Administrator'
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Web Developer'        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'UI/UX Designer'        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Sales Woman'        },
          {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Web Developer'        },
          {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'UI/UX Designer'        },
      ],
      disabled: false,
      dense: false,
      flat: false,
      subheader: true,
      inactive: false,
      subGroup: false,
      nav: false,
      avatar: true,
      rounded: false,
    }),
  }
</script>
<style lang="sass" scoped>
.v-card
    border: none !important
</style>
