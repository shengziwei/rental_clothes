<template>
    <div class='orderDetailView'>
        <div class="itemList">
        <div v-for="item,index in orderData" :key="index" :status="status">
            <order-item :item="item" :status="status"  @getCommentInfo='getCommentInfo'></order-item>
        </div>
        </div>
        <button v-if="content!=''&&isPay===false" @click='goDeal()'>{{content}}</button>
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
        <div class='comment'>
           <van-overlay :show="show" @click="show = false">
  <div class="wrapper" @click.stop>
    <textarea placeholder="write down your view" v-model='comment'></textarea>
    <button class='commentButton' @click='goSubmitComment()'>提 交</button>
  </div>
</van-overlay> 
        </div>
    </div>
</template>


<script>
import orderItem from '@/components/order/orderItem.vue'
import { setup } from 'mockjs'
import { capitalize, computed, onMounted, reactive, ref, toRefs, watch } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { comfirmForOrder, getOrderDetail, payForOrder, submitComment } from '@/service/order'
import { Notify } from 'vant'

export default{
    name: 'shopCart',
    components:{
        orderItem
    },
    setup(props){
        const route = useRoute();
        const orderId = route.query.orderId
        const orderData = ref([])
        const content =ref('')
        const store = useStore();
        const orderInfo = ref([])
        const isPay = ref(false)
        const value = ref('');
        const showKeyboard = ref(true);
        const errorInfo = ref('');
        const router = useRouter();
         const show = ref(false);
         const comment = ref('')
         const status = ref(0)
         const orderGoodsId = ref(0)

        orderInfo.value = store.state.orderlist.order.filter(item=>item.id==orderId)


        status.value = Number(orderInfo.value[0].order_status)

        console.log(orderInfo.value)

        console.log(orderId)

   
            if( status.value === 1)
            content.value ='立 即 支 付'
            else if( status.value === 2)
             content.value = ''
            else if(status.value === 3)
             content.value ='确 认 收 货'
            else if(status.value === 4)
            content.value =''

        onMounted(()=>{
            getOrderDetail(orderId).then(res=>{
            console.log(res)
           orderData.value = res.data.orderGoods
        })

        })


        const goDeal=()=>{
            if(status.value===1)
            {
                  isPay.value= true
                watch(value, (newVal) => {
                    if (newVal.length == 6 && newVal != '123456') {
                        errorInfo.value = '密码错误';
                        } 
                if(newVal.length == 6 && newVal == '123456') {
                    payForOrder(orderId).then(res=>{
                        console.log(res)
                    })

                    store.state.user.balance -= store.state.shopCart.totalPrice
                    store.state.user.point+= store.state.shopCart.totalPrice
                            router.push({path:'/user'})
                            }
                });
            }
            if(status.value===3){
                comfirmForOrder(orderId).then(res=>{
                    console.log(res)
                    if(res.errno===0)
                    router.push({path:'/user'})
                })
            }
            }
            const goSubmitComment=()=>{
                submitComment(orderGoodsId.value,comment.value).then(res=>{
                    console.log(res)
                    if(res.errno===0)
                    router.push({path:'/user'})
                })
            }
            const getCommentInfo=(goodsId)=>{
                console.log(goodsId)
                if(goodsId!=-1)
                show.value = true
                orderGoodsId.value = goodsId
            }

       return{
           orderId,
           orderData,
           content,
           orderInfo,
           isPay,
           goDeal,
           value,
           showKeyboard,
           errorInfo,
           orderGoodsId,
           show,
           comment,
           status,
           getCommentInfo,
           goSubmitComment
       }

    }
}
</script>

<style scoped>
.orderDetailView{
    align-content: center; 
    margin-top:60px
}
.name{
    margin: 5px 0px;
    font-size: 18px;
    font-weight: bold;
}
.submit{
    background-color: white;
    box-shadow: 0 -3px 4px rgba(146, 145, 145, 0.2);
    position: fixed;
    bottom:49px;
    width:100%
}
.itemList{
     padding: 10px 0;
     border-radius: 15px;
     margin:20px;
     width: 90%;
     height: 100%;
     box-shadow: 0 3px 4px rgba(146, 145, 145, 0.2);
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
 .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
textarea{
      width: 80%;
      height: 100px;
      margin-bottom: 40px;
      font-family: 'VisbyCF-Bold';
  }
  .commentButton{
    width: 200px;
    margin: 10px 10px;
    font-size: 16px;
    font-weight: bold;
    border: brown solid 1px;
    border-radius: 20px;
    color:brown;
    background: rgb(252, 219, 219);
  }
</style>
  