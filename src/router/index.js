import store from '@/store'
import { Notify } from 'vant'
import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('@/views/HomeView.vue')
const ShopCart = () => import('@/views/ShopCartView.vue')
const Category = () => import('@/views/CategoryView.vue')
const User = () => import('@/views/UserView.vue')
const BeforeLogin = () => import('@/views/BeforeLoginView.vue')
const Login = () => import('@/views/LoginView.vue')
const Detail = () => import('@/views/DetailView.vue')
const Register = () => import('@/views/RegisterView.vue') 

const routes = [
  {
    path: '',
    name: 'default',
    component: Home,
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
    component: ShopCart,
    // meta:{
    //   isAuthRequired: true
    // }
  },
  {
    path: '/user',
    name: 'user',
    meta:{
      isAuthRequired: true
    },
    component: User,
  },
  {
    path: '/before_login',
    name: 'beforeLogin',
    component: BeforeLogin
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//路由守卫
 router.beforeEach((to,from,next) =>{
   const isLogin = store.state.user.isLogin;
   console.log(to.meta.isAuthRequired);
   console.log(isLogin);
   if(to.meta.isAuthRequired ===true && isLogin===false){
     console.log("***"+window.localStorage.getItem("token"))
     Notify("登陆后访问");
     return next({name: "beforeLogin"})
   } 
  else
   {
    console.log("！！！"+window.localStorage.getItem("token"))
     return next();
   }
 })

export default router
