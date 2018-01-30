<template>
  <div>
    <v-navigation-drawer
        fixed
        clipped
        v-model="drawer"
        app
      >
        <v-list dense>
          <v-list-tile @click="console.log('Home')">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="console.log('Contact')">
            <v-list-tile-action>
              <v-icon>contact_mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Contact</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar
        color="blue darken-3"
        dark
        app
        clipped-left
        fixed
      >
      <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-xs-only">Movies</span>
      </v-toolbar-title>
      <v-text-field
          light
          solo
          prepend-icon="search"
          placeholder="Search"
          style="max-width: 500px; min-width: 128px"
        ></v-text-field>
      <div class="d-flex align-center" style="margin-left: auto">
        <v-btn icon>
          <v-icon>apps</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>
        <v-btn icon large>
          <v-avatar size="32px" tile>
            <img
              src="https://vuetifyjs.com/static/doc-images/logo.svg"
              alt="Vuetify"
            >
          </v-avatar>
        </v-btn>
      </div>
    </v-toolbar>
  <!-- <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <template>
          <router-link to="/" class="navbar-item" exact>Home</router-link>
          <router-link to="/genres" class="navbar-item">Жанры</router-link>
          <router-link to="/actors" class="navbar-item">Актеры</router-link>
        </template>
      </div>
    </div>
  </nav> -->
  </div>
</template>

<script>
export default {
  name: 'vue-navbar',
  data () {
    return {
      drawer: null
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
