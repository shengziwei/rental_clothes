import { createStore } from 'vuex';
import { getShopCartData } from '@/service/shopcart';
import  {getOrderList} from "@/service/order.js"

//全局变量
const state ={
  user: {
    isLogin: window.localStorage.getItem("token")? true:false,
    balance:100,
    points:100
  },
  shopCart: {
    goods:[],
    totalNum:0,
    totalPrice:0,
  },
  orderlist:{
    order:[],
    pay_num:0,
    sending_num:0,
    sended_num:0,
    complete_num:0,
    all_num:0
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
    console.log(state.shopCart.goods );
  },
  setShopNumAndPrice(state,payload){
    console.log(payload)
    let i;
    state.shopCart.totalNum = 0;
    state.shopCart.totalPrice = 0;
    payload = payload.filter(item=>item.checked == true)
    for(i in payload)
   {
    state.shopCart.totalNum += payload[i].number; 
    state.shopCart.totalPrice += payload[i].price*payload[i].number;
  }
  },
  setOrder(state,payload){
    state.orderlist.order = payload
    state.orderlist.pay_num = state.orderlist.order.filter(item=>Number(item.order_status)===1).length;
    state.orderlist.sending_num = state.orderlist.order.filter(item=>Number(item.order_status)===2).length;
    state.orderlist.sended_num = state.orderlist.order.filter(item=>Number(item.order_status)===3).length;
    state.orderlist.complete_num = state.orderlist.order.filter(item=>Number(item.order_status)===4).length;
    state.orderlist.all_num = state.orderlist.order.length;
  }
},
  actions:{
    updateCart({commit}){
      getShopCartData().then((res)=>{
        console.log(res.data);
        commit('setShopCart',res.data.cartList)
        commit('setShopNumAndPrice',res.data.cartList)
      });
    },
    setOrder({commit}){
      getOrderList().then((res)=>{
        console.log(res);
        commit('setOrder',res.data.list)
      })
    }
  },
  getters:{}
})
