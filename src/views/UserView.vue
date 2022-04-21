<template>
    <div class ='userView'>
      <div class='basicInfoBox'>
          <van-image
           round
           width="100"
           height="100"
           :src='profile_img'
            />
           <div class="name">{{name}}</div>
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
              <div class="toList" @click="$router.push({path:'/register'})">全部订单 ›</div>
          </div>
          <div class="van-hairline--top"></div>
          <div class='order'>
              <div class='item'>
              <img src="@/assets/images/order_pay.svg"/>
              <div>待付款</div>
              </div>
              <div class='item'>
              <img src="@/assets/images/order_sending.svg"/>
              <div>待发货</div>
              </div>
              <div class='item'>
              <img src="@/assets/images/order_sended.svg"/>
              <div>已发货</div>
              </div>
              <div class='item'>
              <img src="@/assets/images/order_complete.svg"/>
              <div>已完成</div>
              </div>
          </div>
      </div>

    </div>
</template>

<script>
import { onMounted, ref, reactive, toRefs } from '@vue/runtime-core'
import { getUserInfo } from '@/service/user'

export default{
    name: 'user',
    components:{

    },
    setup(){
        const userInfo = reactive({
            name:null,
            balance:null,
            points:null,
            profile_img:null
        })

        onMounted(()=>{
            getUserInfo().then(res=>{
                console.log(res);
                userInfo.name = res.data.name;
                userInfo.balance= res.data.balance;
                userInfo.points =res.data.points;
                userInfo.profile_img = res.data.profile_img
            })
        })

        return {
           ...toRefs(userInfo)
        }

    }
}
</script>



<style scoped>
.basicInfoBox{
    margin-top: 50px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-items: center;
     box-shadow: 0 8px 0px rgba(146, 145, 145, 0.2);
}
.name{
    font-size: 26px;
    width: 50%;
    font-weight: bold;
}
.moneyBox{
    margin-top: 10px;
    padding: 10px;
    display: flex;
    font-weight: bold;
    font-family: "VisbyCF-Bold";
    box-shadow: 0 8px 0px rgba(146, 145, 145, 0.2);
}
.moneyBox img{
    width: 50px;
    height: 50px
}
.balance{
    width: 50%
}
.point{
  width: 50%
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
    font-size: 18px;
    font-weight: bold;
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