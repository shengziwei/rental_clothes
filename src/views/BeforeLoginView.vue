<template>
<div class= 'beforeLogin'>
    <img src = "@/assets/images/logo.png">
    <div class='warning'>请登陆后继续浏览</div>
    <div class="before-login-button">
    <button class='login' @click='toLogin'>登录</button>
    <button class= 'cancle'>取消</button>
    </div>
</div>
</template>

<script>
import { useRouter } from "vue-router"


export default({
    setup() {
        const router = useRouter();

        const toLogin=()=>{
            router.push('/login')
        }
        return {
            toLogin
        }
        
    },
})
</script>
>
<style scoped>
.beforeLogin{
    margin: 200px 0;
}

.warning{
    color: brown;
    font-size:13px;
    margin-top: 20px;
    margin-bottom: 10px;
}

button{
    width: 300px;
    margin: 10px 10px;
    font-size: 16px;
    border: brown solid 1px;
    border-radius: 20px;
}

.login{
    background-color: brown;
    color:antiquewhite;
}
.cancle{
    color:brown;
}
</style>