import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('@/views/HomeView.vue')
const ShopCart = () => import('@/views/ShopCartView.vue')
const Category = () => import('@/views/CategoryView.vue')
const User = () => import('@/views/UserView.vue')

const routes = [
  {
    path: '',
    name: 'default',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: ShopCart
  },
  {
    path: '/user',
    name: 'user',
    component: User
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
