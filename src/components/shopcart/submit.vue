<template>
<div class='submitBar'>
<div class='moneyBox'>
    <div>TOTAL</div>
    <div>{{$store.state.shopCart.totalPrice}}￥</div>
</div>
<button @click="goOrderDetail(buttomType)">{{buttomContent}}</button>
</div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';
export default {
    name:"submitBar",
    components:{

    },
    props:{
        buttomType:{
            type: Number,
            default: 1,
        }
    },
    setup(props) {
        const router = useRouter();
        const buttomContent = ref ('');
        const store = useStore();
        const goodsId =  ref([])
        console.log(props.buttomType)

        if(props.buttomType===1)
        {
        buttomContent.value = '提 交 订 单';
         }
         if(props.buttomType === 2)
         {
             buttomContent.value = '确 认 支 付'
         }

        const goOrderDetail=(buttomType)=>{
            if(buttomType === 1)
            {
            store.state.shopCart.goods.filter(item=>item.isChecked===true).forEach(element => {
            goodsId.value.push(element.id)
            })
            router.push({
            path:'/order',
            query:{
                goodsId: goodsId.value,
            } //改成query形式以防止id丢失
            })
            }
            if(buttomType === 2)
            {
            router.push({path:'/user'})
            }
        }
        return{
            goOrderDetail,
            buttomContent,
            store,
            goodsId
        }
        
    },
}
</script>
<style lang="scss" scoped>
.submitBar{
    font-family:'VisbyCF-Bold';
    font-weight: bold;
    font-size:16px;
    width:100%;
    align-items: center;
    justify-content: center;
}
.moneyBox{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin:10px 0px 
}
.moneyBox div{
    width:50%
}

button{
    border-radius: 0px;
    border: 0px;
    background-color: #111111;
    width: 300px;
    height: 45px;
    font-size: 16px;
    font-weight: 200;
    color: aliceblue;
    margin-bottom: 10px;
}
</style>