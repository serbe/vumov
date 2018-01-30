<template>
  <v-toolbar dark color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'vue-toolbar',
  data () {
    return {
      active: ''
    }
  },
  methods: {
    // toggle () {
    //   this.active = this.active === '' ? 'is-active' : ''
    // }
  }
}
</script>

<style scoped>
/* a.is-active {
  border-bottom: 3px solid #363636;
} */
</style>
