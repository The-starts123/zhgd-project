import Vue from 'vue'
import VueRouter from 'vue-router'
import list from '../views/list/list.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'a-map',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/map.vue'),
    meta: {
      show: true
    }
  },
  {
    path: '/list',
    name: 'list',
    component: list,
    meta: {
      show: true
    }
  },
  {
    path: '/image',
    name: 'image',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/list/image.vue'),
    meta: {
      show: false
    }
  },
  {
    path: '/file',
    name: 'file',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/list/file.vue'),
    meta: {
      show: false
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
