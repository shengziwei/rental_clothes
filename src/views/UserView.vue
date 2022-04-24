<template>
    <div class ='userView'>
      <div class='basicInfoBox'>
          <van-image
           round
           width="100"
           height="100"
           :src='profile_img'
            />
            <div class=basicBox>
           <div class="name">{{name}}</div>
           <div class="membership">{{membership}}</div>
            </div>
      </div>
      <div class='moneyBox'>
          <div class='balance'>
              <img src="@/assets/images/balance.svg"/>
              <div>￥{{balance}}</div>
          </div>
          <div class='point'>
                <img src="@/assets/images/point.svg"/>
              <div>{{points}}</div>
          </div>
      </div>
      <div class='orderBox'>
          <div class='title'>
              <div class="my">我的订单</div>
              <div class="toList" @click="$router.push({path:'/orderlist'})">全部订单 ›</div>
          </div>
          <div class="van-hairline--top"></div>
          <div class='order'>
              <div class='item' @click ="$router.push({path:'/orderlist',query:{index: 1}})">
              <img src="@/assets/images/order_pay.svg"/>  
              <van-icon class='vab-icon' 
              v-if="$store.state.orderlist.pay_num!=0"
              :badge="$store.state.orderlist.pay_num" max="99"></van-icon>
              <div>待付款</div>
              </div>
              <div class='item'  @click ="$router.push({path:'/orderlist',query:{index: 2}})">
              <img src="@/assets/images/order_sended.svg"/>
               <van-icon class='vab-icon' 
               v-if="$store.state.orderlist.sending_num!=0"
               :badge="$store.state.orderlist.sending_num" max="99"></van-icon>
              <div>待发货</div>
              </div>
              <div class='item'  @click ="$router.push({path:'/orderlist',query:{index: 3}})">
              <img src="@/assets/images/order_sending.svg"/>
               <van-icon class='vab-icon' 
               v-if="$store.state.orderlist.sended_num!=0"
               :badge="$store.state.orderlist.sended_num" max="99"></van-icon>
              <div>已发货</div>
              </div>
              <div class='item'  @click ="$router.push({path:'/orderlist',query:{index: 4}})">
              <img src="@/assets/images/order_complete.svg"/>
              <van-icon class='vab-icon' 
              v-if="$store.state.orderlist.complete_num!=0"
              :badge="$store.state.orderlist.complete_num" max="99"></van-icon>
              <div>已完成</div>
              </div>
          </div>
      </div>

    </div>
</template>

<script>
import { onMounted, ref, reactive, toRefs } from '@vue/runtime-core'
import { getUserInfo } from '@/service/user'
import { getOrderList } from '@/service/order'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default{
    name: 'user',
    components:{

    },
    setup(){
        const userInfo = reactive({
            name:null,
            balance:null,
            points:null,
            profile_img:null,
            membership: null
        })
        const store = useStore();

        onMounted(()=>{
            getUserInfo().then(res=>{
                console.log(res);
                userInfo.name = res.data.name;
                userInfo.balance= res.data.balance;
                userInfo.points =res.data.points;
                userInfo.profile_img = res.data.profile_img
                userInfo.membership = res.data.membership
            })
                store.dispatch('setOrder')
        })

        return {
           ...toRefs(userInfo)
        }

    }
}
</script>



<style scoped>
.van-icon{
    margin-bottom: 50px
}
.basicInfoBox{
    margin-top: 50px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-items: center;
     box-shadow: 0 8px 0px rgba(146, 145, 145, 0.2);
}
.basicBox{
    font-size: 26px;
    width: 50%;
    font-weight: bold;
    font-family: "VisbyCF-Bold";
}
.membership{
    font-size: 15px;
    font-weight: 400;
    color: brown;
    margin: 10px 40px;
    padding: 10px 20px;
    border: dotted brown
}
.moneyBox{
    margin-top: 10px;
    padding: 10px;
    display: flex;
    font-weight: bold;
    font-family: "VisbyCF-Bold";
    align-items: center;
    align-content: center;
    justify-content: center;
    justify-items: center;
    box-shadow: 0 8px 0px rgba(146, 145, 145, 0.2);
}
.moneyBox img{
    width: 50px;
    height: 50px
}
.balance{
    width: 50%
}
.balance div{
    margin:0 40px
}
.point{
  width: 50%
}
.point div{
    margin:0 40px
}
.title{
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 10px;
   font-size: 14px;
}
.my{
    font-size: 18px;
    font-weight: bold;
}
.order{
    display: flex;
    font-size: 15px;
    font-weight:bolder;
    align-items: center;
    justify-items: center;
    padding: 20px 0px;
    box-shadow: 0 8px 0px rgba(146, 145, 145, 0.2);
}
.item{
   width: 25%
}
.order img{
    width:50px;
    height: 50px
}
</style>