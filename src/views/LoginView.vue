<template>
    <div class='login-view'>
         <img  src = "@/assets/images/logo.png">
        <div class='login-form'>
            <div class='title'>login</div>
            <div class='item'>username</div>
            <input type= 'text' v-model="name">
            <div class='item'>password</div>
            <input type='password' v-model="password">
        </div>
        <div class='link-register' @click="$router.push({path:'/register'})">
            没有账号，立即注册
        </div>
        <button @click="onSubmit">SIGN IN</button>
        <verify-img></verify-img>
    </div>
</template>
<script>
import { reactive, toRefs } from '@vue/reactivity'
import { Notify } from "vant"
import { loginRequest } from "@/service/user.js"
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import verifyImg from '@/components/utils/img_verify.vue'


export default {
    name:'Login',
    components:{
        verifyImg
    },
    setup() {
          const userInfo = reactive({
            name: '',
            password:''
        });
        const store = useStore();
        const router = useRouter();
        

        const onSubmit = ()=>{
            if(userInfo.name === '')
            Notify('账号或密码不能为空');
            else
            {
                loginRequest(userInfo).then(res=>{
                    if(res.data.status === '200'){
                    Notify({type:'success',message:'登录成功'});
                    let token = res.data.access_token;
                    window.localStorage.setItem("access_token",token);
                    store.commit("setIsLogin",true); //调用commit触发mutation中的方法
                    store.dispatch("updateCart")
                    }
            
                    setTimeout(()=>{
                        router.push({path:'/user'});
                    },1000)
                })
                //用户的登陆状态将被存储在vuex中，Vuex往往用于组件间传值（响应式）
                //token信息将被存储在localstorage种，localstorage往往用于跨页面传值（非响应式）
                //刷新页面时vuex存储的值会丢失而localstorage不会，因此token存储在localstorage中

            }
        }

        return{
            ...toRefs(userInfo),
            onSubmit
        }

    },

}
</script>

<style scoped>
.login-view img{
    margin-top:100px;
}

.login-form{
    font-family: 'VisbyCF-Thin';
    margin-top: 10px;
    align-content: center;
    justify-items: center;
    margin:  10px 30px;
}

.title{
    font-size: 25px;
    font-family: 'VisbyCF-Bold';
    font-weight: 700;
    word-wrap: break-word;
    line-height: 1.2;
    display: block;
    letter-spacing: 2px;
}

.item{
    text-align: left;
    font-family: 'VisbyCF-Bold';
    font-size: 14px;
    letter-spacing: .06em;
    margin-bottom: 5px;
    font-weight: 200;
}

input{
    border: 1px solid #111111;
    background: white;
    letter-spacing: .0625em;
    padding: 13px;
    display: block;
    width: 90%;
    margin: 0.4em 0 1.4em;
    border-radius: 0;
}
button{
    font-family: 'VisbyCF-Bold';
    font-weight: 700;
    letter-spacing: .06em;
    white-space: normal;
    font-size: 12px;
    border: 1px solid transparent;
    border-radius: 0;
    padding: 13px 5px;
    border-color: #000;
    background: #111111;
    color: #fff;
    width: 240px
}

.link-register{
    margin-bottom: 20px;
    color: brown;
}
</style>

