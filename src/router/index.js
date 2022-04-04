import { createRouter, createWebHashHistory } from 'vue-router'

const Home =() => import('@/views/HomeView.vue')

const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
