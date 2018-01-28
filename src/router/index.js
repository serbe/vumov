import Vue from 'vue'
import Router from 'vue-router'

const lazyLoad = (path) => () => import(`@/components/${path}`)

Vue.use(Router)

export default new Router({
  hashbang: false,
  linkActiveClass: 'is-active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: lazyLoad('Home')
    },
    {
      path: '/genres',
      name: 'Genres',
      component: lazyLoad('Genres')
    },
    {
      path: '*',
      name: '404',
      component: lazyLoad('NotFoundComponent')
    }
  ]
})
