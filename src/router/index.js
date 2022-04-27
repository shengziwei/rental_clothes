import store from '@/store'
import { Notify } from 'vant'
import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('@/views/HomeView.vue')
const ShopCart = () => import('@/views/ShopCartView.vue')
const Category = () => import('@/views/CategoryView.vue')
const User = () => import('@/views/UserView.vue')
const Login = () => import('@/views/LoginView.vue')
const Detail = () => import('@/views/DetailView.vue')
const Register = () => import('@/views/RegisterView.vue') 
const OrderList = () => import('@/views/OrderListView.vue')
const Order = () =>import('@/views/OrderView.vue')
const Search = () => import('@/views/SearchView.vue')
const Address = () => import('@/views/AddressView.vue')
const EditAddress = () => import('@/views/EditAddressView.vue')
const Comment = ()=>import('@/views/CommentView.vue')
const OrderDetail = ()=>import('@/views/OrderDetailView.vue')

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
    // meta:{
    //   isAuthRequired: true
    // },
    component: User,
  },
  {
    path: '/comment',
    name: 'comment',
    // meta:{
    //   isAuthRequired: true
    // },
    component: Comment,
  },
  {
    path: '/order_detail',
    name: 'orderDetail',
    // meta:{
    //   isAuthRequired: true
    // },
    component: OrderDetail,
  },
  {
    path: '/address',
    name: 'address',
    // meta:{
    //   isAuthRequired: true
    // },
    component: Address,
  },
  {
    path: '/edit_address',
    name: 'EditAddress',
    // meta:{
    //   isAuthRequired: true
    // },
    component: EditAddress,
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
  },
  {
    path: '/orderlist',
    name: 'OrderList',
    component: OrderList
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  

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
     return next({name: "login"})
   } 
  else
   {
    console.log("！！！"+window.localStorage.getItem("token"))
     return next();
   }
 })

export default router
