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
import { AddressEdit } from 'vant';
import { Cascader } from 'vant';
import { Field, CellGroup } from 'vant';
import { Popup } from 'vant';
import { SwipeCell } from 'vant';
import { Cell} from 'vant';
import { PasswordInput, NumberKeyboard } from 'vant';
import { ActionSheet } from 'vant';
import { Overlay } from 'vant';


// 引入全局样式
import '@/assets/css/index.css'
import '@vant/touch-emulator';


createApp(App).use(Swipe).use(SwipeItem).use(Badge).use(Sidebar)
.use(SidebarItem)
.use(Collapse).use(CollapseItem).use(VanImage)
.use(Button).use(Checkbox).use(CheckboxGroup)
.use(Tab).use(Tabs).use(SubmitBar).use(Icon)
.use(AddressEdit).use(SwipeCell)
.use(Cascader).use(Field).use(CellGroup).use(Popup).use(Cell)
.use(PasswordInput).use(NumberKeyboard)
.use(ActionSheet)
.use(Overlay)
.use(store).use(router).mount('#app')
