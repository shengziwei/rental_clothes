import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('@/views/HomeView.vue')
const ShopCart = () => import('@/views/ShopCartView.vue')
const Category = () => import('@/views/CategoryView.vue')
const User = () => import('@/views/UserView.vue')
const BeforeLogin = () => import('@/views/BeforeLoginView.vue')
const Login = () => import('@/views/LoginView.vue')
const Detail = () => import('@/views/DetailView.vue')

const routes = [
  {
    path: '',
    name: 'default',
    component: Home,
    meta:{

    },//meta字段元数据，导航守卫，之后用于登录校验
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
  },
  {
    path: '/before_login',
    name: 'beforeLogin',
    component: BeforeLogin
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
