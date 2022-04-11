import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mockServer'
import 'vant/lib/index.css'
import {Swipe,SwipeItem, Badge} from 'vant'

// 引入全局样式
import '@/assets/css/index.css'


createApp(App).use(Swipe).use(SwipeItem).use(Badge).use(store).use(router).mount('#app')
