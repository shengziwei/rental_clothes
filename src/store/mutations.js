//修改全局变量用mutation

const mutations = {
    setIsLogin(state, payload){
        state.user.isLogin = payload;
    }

}

export default mutations;