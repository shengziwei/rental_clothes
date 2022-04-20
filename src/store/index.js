import { createStore } from 'vuex';
import {mutations} from './mutations';
import {getters} from './getters.js';
import {actions} from './actions.js'

//全局变量
const state ={
  user: {
    isLogin: window.localStorage.getItem("token")? true:false
  }
};

export default createStore({
  state,
  // mutations,
  mutations:{
    setIsLogin(state, payload){
      state.user.isLogin = payload;
  }
  },
  actions,
  getters
})
