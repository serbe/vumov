export const loadPage = ({ commit }) => commit('loadPage')
export const search = ({ commit }) => commit('search')
export const getMovies = ({ commit }) => {
  commit('loadMovies', true)
  commit('clearMovies')
  fetch(`http://localhost:7070/api/movies/1`)
    .then(res => res.json())
    .then(res => {
      commit('movies', res.movies)
      commit('loadMovies', false)
    })
}
