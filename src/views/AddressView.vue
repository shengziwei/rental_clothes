<template>
   <div class='addressView'>
       <button class='add' @click="$router.push({path:'/edit_address'})">+新增地址</button>
       <div class='addressList'  v-for="(item,index) in addressList">
        <van-swipe-cell>
         <div class='addressBox'>
          <img src="@/assets/images/address.svg">
          <div class='address'>
          <div class='name'>{{item.name}} {{item.phone}}</div>
          <div>{{item.address}}</div>
          </div>
         </div>
  <template #right>
    <button class='swipeButton' @click="goEdit(index)">编辑</button>
      <button class='swipeButton' @click='deleteAddress(index)'>删除</button>
  </template>
</van-swipe-cell>
       </div>
       </div> 
</template>



<script>
import { onMounted, ref } from '@vue/runtime-core'
import { getAddressList } from '@/service/address'
import { useRouter } from 'vue-router'

export default {
    name: 'addressView',
    components:{
    },
    setup() {
        const addressList = ref([])
        const router = useRouter();

        onMounted(()=>{
            getAddressList().then(res=>{
                console.log(res);
                addressList.value = res.data
            })
        })
        const deleteAddress=(index)=>{
            addressList.value.splice(index,1)
        }
        const goEdit=(index)=>{
            router.push({
                path:'/edit_address',
                query: {
                    aid:addressList.value[index].aid
                }
            })

        }

        return{
            addressList,
            deleteAddress,
            goEdit
        }
    },
}
</script>


<style scoped>
.add{
    width: 300px;
    margin: 10px 10px;
    font-size: 16px;
    border: transparent;
    border-radius: 20px;
    color: white;
    background-color: brown;
    height: 40px;
    position: fixed;
    bottom: 60px;
    left:35px;
}
.van-swipe-cell{
    width: 96%;
    height: 100%;
}

.van-swipe-cell_left,.van-swipe-cell_right{

    text-align: center;
}
.swipeButton{
    height: 100%;
    width: 40%;
    margin: 0 5px;
    font-size:16px;
    border-radius: 0px;
    background: brown;
    color: white;
    border:transparent
}
.addressView{
    height: 100%;
}
.addressBox{
    margin: 30px 10px 0px;
    display: flex;
    flex-direction: row;
    width: 360px;
    height: 60px;
    align-items: center;
    justify-items: center;
    border: 1px solid grey;
    border-radius: 20px;
    background: rgba(254, 232, 232, 0.163);
}
.addressBox img{
    width: 80px;
    height: 30px
}

.address{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 14px;
    font-weight: 300;
}
.name{
    margin: 5px 0px;
    font-size: 18px;
    font-weight: bold;
}

</style>