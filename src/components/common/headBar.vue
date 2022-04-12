<template>
    <div class='headBar'>
        <div class= 'back' @click="goback"><i class='iconfont icon-back'></i></div>
        <div class= 'logo_head'><img src="@/assets/images/logo.png"></div>
        <div class='search'><i class='iconfont icon-search'></i></div>
    </div>
</template>

<script>
import { useRouter } from "vue-router"

export default{
    name: 'HeadBar',
    setup() {
        const router = useRouter();
        const goback = () =>{
            router.go(-1);
        }
        return {
            goback
        }
    }
}

</script>
<style>
.headBar{
    height: 45px;
    background-color: #fff1f1;
    /* background-color: #ebdada5d; */
    box-shadow: 0 -1px 2px rgb(100,100,100);
    position: fixed;
    left:0;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
}

.logo_head{
    width:300px;
}
.logo_head img{
    width:50px;
    height:50px
}

.search,.back{  
    flex: 1;
}

</style>