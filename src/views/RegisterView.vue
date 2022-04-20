<template>
    <div class='register-view'>
         <img  src = "@/assets/images/logo.png">
        <div class='login-form'>
            <div class='title'>register</div>
            <div class='item'>username</div>
            <input type= 'text' v-model="name">
            <div class='item'>password</div>
            <input type='password' v-model="password">
        </div>
        <button @click="onSubmit">REGISTER</button>
    </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import {registerRequest} from "@/service/user.js"
import {Notify} from 'vant'
import {useRouter} from 'vue-router'

export default {
     name: "Register",
     components:{

     },
    setup() {
        const userInfo = reactive({
            name: '',
            password:''
        })
        const router = useRouter();
        const onSubmit = () =>{
            if(userInfo.name === '')
            Notify('账号或密码不能为空');
            else
            {
                registerRequest(userInfo).then(res=>{
                    if(res.data.status === '200')
                    Notify({type:'success',message:'注册成功'});
                    setTimeout(()=>{
                        router.push({path:'/user'});
                    },1000)
                })
                name = '';
                password = '';
            }
        };
    return {
        onSubmit,
        ...toRefs(userInfo)
    }

    },

}
</script>>
<style scoped>
.register-view img{
    margin-top:100px;
}

.login-form{
    font-family: 'VisbyCF-Thin';
    margin-top: 10px;
    align-content: center;
    justify-items: center;
    margin: 30px;
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
    font-size: 18px;
    font-weight: bold
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
</style>

