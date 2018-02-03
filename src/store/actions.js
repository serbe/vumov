export const loadPage = ({ commit }) => commit('loadPage')
export const search = ({ commit }) => commit('search')
export const getMovies = ({ commit }, page) => {
  commit('loadMovies', true)
  commit('clearMovies')
  if (page < 1) {
    page = 1
  }
  let url = `http://localhost:7070/api/movies/${page}`
  let headers = new Headers()
  let init = {
    method: 'GET',
    headers: headers,
    mode: 'cors',
    cache: 'default'
  }
  fetch(url, init)
    .then(res => res.json())
    .then(res => {
      commit('movies', res.movies)
      commit('moviesCount', res.count)
      commit('loadMovies', false)
    })
}
