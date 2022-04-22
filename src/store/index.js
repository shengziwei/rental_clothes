import { createStore } from 'vuex';
import { getShopcartData } from '@/service/shopcart';
import { stringifyStyle } from '@vue/shared';

//全局变量
const state ={
  user: {
    isLogin: window.localStorage.getItem("token")? true:false
  },
  shopCart: {
    goods:[],
    totalNum:0,
    totalPrice:0,
  }
};

export default createStore({
  state,
  // mutations,
  mutations:{
    setIsLogin(state, payload){
      state.user.isLogin = payload;
  },
    setShopCart(state, payload){
    state.shopCart.goods = payload;
  },
  setShopNumAndPrice(state,payload){
    let i;
    state.shopCart.totalNum = 0;
    state.shopCart.totalPrice = 0;
    for(i in payload)
   {
    state.shopCart.totalNum += payload[i].num; 
    state.shopCart.totalPrice += payload[i].price*payload[i].num;
  }
  }
},
  actions:{
    updateCart({commit}){
      getShopcartData().then((res)=>{
        console.log(res);
        commit('setShopCart',res.data.goods)
        commit('setShopNumAndPrice',res.data.goods)
      });
    }
  },
  getters:{}
})
