import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mockServer'
import 'vant/lib/index.css'
import {Swipe,SwipeItem, Badge,Sidebar,SidebarItem,Collapse,CollapseItem} from 'vant'

// 引入全局样式
import '@/assets/css/index.css'


createApp(App).use(Swipe).use(SwipeItem).use(Badge).use(Sidebar)
.use(SidebarItem)
.use(Collapse).use(CollapseItem)
.use(store).use(router).mount('#app')
