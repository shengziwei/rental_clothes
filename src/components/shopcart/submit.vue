<template>
<div class='submitBar'>
<div  v-if='isPay===false' class='submitBox'>
<div class='moneyBox'>
    <div>TOTAL</div>
    <div>{{$store.state.shopCart.totalPrice}}￥</div>
</div>
<button @click="goOrderDetail(buttomType)">{{buttomContent}}</button>
</div>

<div v-if='isPay' class='payBox'>
    <van-password-input
 :value="value"
  info="密码为 6 位数字"
  :error-info="errorInfo"
  :focused="showKeyboard"
  @focus="showKeyboard = true"
/>
<!-- 数字键盘 -->
<van-number-keyboard
  v-model="value"
  :show="showKeyboard"
  @blur="showKeyboard = false"
/>
</div>
</div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';
import { payForOrder, submitOrder } from '@/service/order';
import { Notify } from 'vant';
import { watch } from '@vue/runtime-core';
export default {
    name:"submitBar",
    components:{

    },
    props:{
        buttomType:{
            type: Number,
            default: 1,
        },
        aid:{
            type:  Number,
            default: 0
        }
    },
    setup(props) {
        const isPay = ref(false);
        const router = useRouter();
        const buttomContent = ref ('');
        const store = useStore();
        const goodsId =  ref([])
        const value = ref('');
        const showKeyboard = ref(true);
        const errorInfo = ref('');
        const orderId = ref('')

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
            console.log(store.state.shopCart.goods)
            if(buttomType === 1)
            {
            store.state.shopCart.goods.filter(item=>item.checked===true).forEach(element => {
            goodsId.value.push(element.goodsId)
            })
            if(goodsId.value.length===0)
            Notify({type:'warning',message:'请勾选要购买的商品'})
            else{
            if(store.state.user.balance<store.state.shopCart.totalPrice)
            Notify({type:'danger',message:'余额不足,请充值'})
            else{
            router.push({
            path:'/order',
            query:{
                goodsId: goodsId.value,
            } //改成query形式以防止id丢失
            })
            }
            }
            }
            if(buttomType === 2)
            {
                isPay.value= true
                  submitOrder(0,props.aid).then(res=>{
                console.log(res)
                store.dispatch("updateCart")
                orderId.value = res.data.orderId
            })
                watch(value, (newVal) => {
                    if (newVal.length == 6 && newVal != '123456') {
                        errorInfo.value = '密码错误';
                        } 
                if(newVal.length == 6 && newVal == '123456') {
                    payForOrder(orderId.value).then(res=>{
                        console.log(res)
                    })
                    store.state.user.balance -= store.state.shopCart.totalPrice
                    store.state.user.point+= store.state.shopCart.totalPrice
                            router.push({path:'/user'})
                            }
                });
            //  router.push({path:'/user'})
            }
        }
        return{
            goOrderDetail,
            buttomContent,
            store,
            isPay,
            goodsId,
            value,
            showKeyboard,
            errorInfo,
            orderId
        }
        
    },
}
</script>
<style lang="scss" scoped>
.submitBox{
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
.payBox{
    height:350px;
}
.van-number-keyboard{
    margin-bottom: 50px;
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