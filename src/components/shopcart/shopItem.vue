<template>
<div class='shopItem' >
<div class='itemBox'>
    <div class='box'>
  <van-checkbox v-model="item.checked" @change="updatePrice(item.checked,item.goodsId,index)" shape="square" checked-color="black"></van-checkbox>
    </div>
 <div class='image'><img :src='item.picUrl'></div>
 <div class='goodsInfo'>
     <div class='name'>{{item.goodsName}}</div>
     <div class='price'>￥{{item.price}}/天</div>
 </div> 
</div>
 <div class='goodsControl'>
 <quantity-control class='quantity'  :index="index"></quantity-control>
 <div class='delete' @click='deleteItem(item.goodsId,index)'>remove</div>
 </div>
</div>
</template>

<script>
import { ref, toRefs } from '@vue/reactivity';
import quantityControl from './quantityControl.vue';
import { checkShopcartData, deleteShopcartData, getShopcartData, modifyShopcartData } from '@/service/shopcart';
import { useStore } from 'vuex';
import store from '@/store';
import { computed, nextTick, onMounted, watch, watchEffect } from '@vue/runtime-core';

export default {
	components: { quantityControl },
    name:'shopItem',
    props: {
        item:{
            type: Object,
            default(){
                return {};
            }
        },
        index: {
            type: Number,
            default: 1
        }
    },
    setup(props) {
    const checked = ref(true);
    const store = useStore();
    const goods = ref([]);
    const goodsId = ref([]);
    onMounted(()=>{
        goods.value = store.state.shopCart.goods
    })

    const deleteItem = (id,index)=>{
        // if(checked.value===true)
        // store.state.shopCart.totalPrice-=goods.value[index].num*goods.value[index].price;

      store.state.shopCart.goods.splice(index,1)
       store.commit("setShopNumAndPrice",store.state.shopCart.goods)

        let productIds = ref([]);
        productIds.value.push(id)

        deleteShopcartData(productIds.value).then(res=>{
            console.log(res);
        })
      }

    const updatePrice = (checked,id,index)=>{
        console.log(checked)
          let productIds = ref([]);
        productIds.value.push(id)

        if(checked==true)
        {
            store.state.shopCart.totalPrice+=(goods.value[index].number*goods.value[index].price)
            goods.value[index].isChecked = false;
            checkShopcartData(productIds.value,1).then(res=>{
                console.log(res)
            })
        }
        
         if(checked==false)
        {
            store.state.shopCart.totalPrice-=(goods.value[index].number*goods.value[index].price)
            goods.value[index].isChecked = true;
              checkShopcartData(productIds.value,0).then(res=>{
                console.log(res)
            })
        store.commit("setShopNumAndPrice",store.state.shopCart.goods)

        }

    }
    return {
        checked,
        deleteItem,
        updatePrice,
        goods
    }
  }
}
</script>

<style scoped>
.itemBox{
    display:flex;
    margin: 10px 20px 0px;
    align-items: center;
    align-content: center;
    border: 1px solid #111111;
}

.box{
    width: 15%;
    margin-left: 10px
}
.goodsInfo{
    display: flex;
    flex-direction: column;
    width: 70%
}
.image img{
    width:100px;
    height:100px;
    margin:5px;
}
.goodsControl{
    display: flex;
    font-family: 'VisbyCF-Bold';
    font-weight: bold;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin-left: 20px;
    margin-right: 20px;
    border: 1px solid #111111;
    border-top: transparent
}
.quantity{
    border-right: 1px solid #111111
}
.delete{
    width: 50%;
}
</style>