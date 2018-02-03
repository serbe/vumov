import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
// import cart from './modules/cart'
// import products from './modules/products'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  movies: [],
  loadMovies: false,
  isLoaded: false,
  search: '',
  moviesCount: 0
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  strict: debug
})
