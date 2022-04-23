import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mockServer'
import 'vant/lib/index.css'
import {Swipe,SwipeItem, Badge,Sidebar,SidebarItem,Collapse,CollapseItem,Button} from 'vant'
import {Checkbox, CheckboxGroup } from 'vant';
import { Image as VanImage } from 'vant';
import { Tab, Tabs } from 'vant';
import { SubmitBar,Icon } from 'vant';

// 引入全局样式
import '@/assets/css/index.css'


createApp(App).use(Swipe).use(SwipeItem).use(Badge).use(Sidebar)
.use(SidebarItem)
.use(Collapse).use(CollapseItem).use(VanImage)
.use(Button).use(Checkbox).use(CheckboxGroup)
.use(Tab).use(Tabs).use(SubmitBar).use(Icon)
.use(store).use(router).mount('#app')
