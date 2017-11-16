<template>
  <div class="container">
    <nav class="navbar ">
      <div class="navbar-brand">
        <template>
          <router-link to="/" class="navbar-item" exact>Home</router-link>
          <!-- <router-link to="/movies" class="navbar-item">Фильмы</router-link> -->
          <!-- <router-link to="/companies" class="navbar-item">Актеры</router-link> -->
        </template>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'vue-navbar',
  data() {
    return {
      active: '',
    };
  },
  methods: {
    toggle() {
      this.active = this.active === '' ? 'is-active' : '';
    },
  },
};
</script>

<style scoped>
a.is-active {
  border-bottom: 3px solid #363636;
}
</style>
