<template>
  <v-app>
    <v-navigation-drawer app></v-navigation-drawer>
    <v-toolbar app></v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import vnavbar from '@/components/Navbar'
import vtoolbar from '@/components/Toolbar'

export default {
  name: 'app',
  components: {
    'vue-navbar': vnavbar,
    'vue-toolbar': vtoolbar
  }
}
</script>

<style>
</style>
