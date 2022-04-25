<template>
    <div  class='headBar'>
    <div class='headBox'>
        <div class= 'back' @click="goback"><i class='iconfont icon-back'></i></div>
        <div class= 'logo_head'><img src="@/assets/images/logo.png"></div>
        <div class='search' @click="openSearch"><i class='iconfont icon-search'></i></div>
    </div>
     <div v-if='isSearch' class='openSearch'>
        <input type='text' v-model="description" placeholder="tell us what you want" />
        <button class='searchButton' @click="goSearch">SEARCH</button>
    </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from "vue-router"

export default{
    name: 'HeadBar',
    setup() {
        const isSearch = ref(false)
        const router = useRouter();
        const description= ref('');

        const goback = () =>{
            router.go(-1);
        }
        const goSearch = () =>{
            isSearch.value = false
            router.push({
                path:'/search',
                query:{
                    description: description.value
                }
            })
            description.value = ""

        }

        const openSearch = () =>{
            if(isSearch.value === false)
            isSearch.value = true
            else
            isSearch.value = false
        }
        return {
            goback,
            isSearch,
            description,
            goSearch,
            openSearch
        }
    }
}

</script>
<style scoped>
.headBox{
    height: 46px;
    background-color: #fff1f1;
    /* background-color: #ebdada5d; */
    box-shadow: 0 -1px 2px rgb(100,100,100);
    position: fixed;
    left:0;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    position: fixed;
    z-index:999
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
.openSearch{
    height: 100px;
    width:100%;
    background: #fff7f7;
    font-family: 'VisbyCF-Bold';
    box-shadow:0px 2px 2px rgb(245, 220, 220);
    position: fixed;
    z-index:999
}
input{
    margin: 30px 0;
    border: 1px solid black;
    height: 30px;
    width: 60%;
    padding: 0 10px;
    box-shadow:-1px 4px 4px rgb(100,100,100,0.2);
}
.searchButton{
    border: 1px solid black;
    border-radius: 0px;
    height:32px;
    transform: translateY(-1.5px);
    border-left: transparent;
    background: white;;
    box-shadow:1px 4px 4px rgb(100,100,100,0.2);
}

</style>