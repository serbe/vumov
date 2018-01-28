import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// Require the main Sass manifest file
require('./assets/sass/main.scss')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
