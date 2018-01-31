<template>
  <div class="columns">
    <div class="column is-2 is-hidden-touch">
      Filters
    </div>
    <div class="column">
      <movie v-for="(data, key) in movies" :movie="data" :key="key"/>
    </div>
    <div class="column is-2 is-hidden-touch">
      Properties
    </div>
  </div>
</template>

<script>
// import store from '@/store'
import Movie from '@/components/Movie'

export default {
  name: 'Home',
  components: {
    'movie': Movie
  },
  data () {
    return {
      // movies: []
    }
  },
  created () {
    console.log('getMovies')
    this.$store.dispatch('getMovies')
  },
  // methods: {
  //   fetch_movies () {

  //   }
  // },
  computed: {
    movies () {
      return this.$store.getters.movies
    }
  }
}
</script>

<style scoped>
</style>
