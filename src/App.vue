<template>
  <v-app>
    <vue-navbar/>
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

export default {
  name: 'app',
  components: {
    'vue-navbar': vnavbar
  }
}
</script>

<style>

</style>
