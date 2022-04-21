import { createStore } from 'vuex';
import {mutations} from './mutations';
import {getters} from './getters.js';
import {actions} from './actions.js'
import { getShopcartData } from '@/service/shopcart';

//全局变量
const state ={
  user: {
    isLogin: window.localStorage.getItem("token")? true:false
  },
  shopCart: {
    cartNum: 0,
  }
};

export default createStore({
  state,
  // mutations,
  mutations:{
    setIsLogin(state, payload){
      state.user.isLogin = payload;
  },
    setShopNum(state, payload){
    state.shopCart.cartNum = payload.count;
  }
},
  actions:{
    updateCart({commit}){
      getShopcartData().then((res)=>{
        console.log(res.data.goods.length);
        commit('setShopNum',{count:res.data.goods.length||0})
      });
    }
  },
  getters
})
