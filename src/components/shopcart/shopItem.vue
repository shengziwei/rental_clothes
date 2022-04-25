<template>
<div class='shopItem' >
<div class='itemBox'>
    <div class='box'>
  <van-checkbox v-model="checked" @change="updatePrice(index)" shape="square" checked-color="black"></van-checkbox>
    </div>
 <div class='image'><img :src='item.cover_url'></div>
 <div class='goodsInfo'>
     <div class='name'>{{item.name}}</div>
     <div class='price'>￥{{item.price}}/天</div>
 </div> 
</div>
 <div class='goodsControl'>
 <quantity-control class='quantity'  :index="index"></quantity-control>
 <div class='delete' @click='deleteItem(item.id,index)'>remove</div>
 </div>
</div>
</template>

<script>
import { ref, toRefs } from '@vue/reactivity';
import quantityControl from './quantityControl.vue';
import { deleteShopcartData, getShopcartData, modifyShopcartData } from '@/service/shopcart';
import { useStore } from 'vuex';
import store from '@/store';
import { onMounted } from '@vue/runtime-core';

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
    setup() {
    const checked = ref(true);
    const store = useStore();
    const goods = ref([]);
    const goodsId = ref([]);
    onMounted(()=>{
        goods.value = store.state.shopCart.goods;
    })
    

    const deleteItem = (id,index)=>{
        if(checked.value===true)
        store.state.shopCart.totalPrice-=goods.value[index].num*goods.value[index].price;

        goods.value.splice(index,1)

        deleteShopcartData(id).then(res=>{
            console.log(res);
        })
        store.commit("setShopNumAndPrice",store.state.shopCart.goods)
       // store.dispatch('updateCart');
    }
    const updatePrice = (index)=>{
        if(checked.value===false)
        {
            store.state.shopCart.totalPrice-=(goods.value[index].num*goods.value[index].price)
            goods.value[index].isChecked = false;
        }
         if(checked.value===true)
        {
            store.state.shopCart.totalPrice+=(goods.value[index].num*goods.value[index].price)
            goods.value[index].isChecked = true;

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