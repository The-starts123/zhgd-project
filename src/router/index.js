import Vue from 'vue'
import VueRouter from 'vue-router'
import list from '../views/list.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'a-map',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/map.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: list
  }
]

const router = new VueRouter({
  routes
})

export default router
