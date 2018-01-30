<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <template>
          <router-link to="/" class="navbar-item" exact>Home</router-link>
          <router-link to="/genres" class="navbar-item">Жанры</router-link>
          <router-link to="/actors" class="navbar-item">Актеры</router-link>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'vue-navbar',
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
