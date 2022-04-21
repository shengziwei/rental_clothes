<template>
<div class='shopItem' >
<div class='itemBox'>
    <div class='box'>
<van-radio-group v-model="checked">
  <van-radio name="1"></van-radio>
</van-radio-group>
    </div>
 <div class='image'><img :src='item.cover_url'></div>
 <div class='goodsInfo'>
     <div class='name'>{{item.name}}</div>
     <div class='price'>￥{{item.price}}</div>
 </div> 
</div>
 <div class='goodsControl'>
 <quantity-control class='quantity'  :modelValue="item.num"></quantity-control>
 <div class='delete'>remove</div>
 </div>
</div>
</template>

<script>
import { ref } from '@vue/reactivity';
import quantityControl from '../detail/quantityControl.vue';

export default {
	components: { quantityControl },
    name:'shopItem',
    props: {
        item:{
            type: Object,
            default(){
                return {};
            }
        }
    },
    setup() {
    const checked = ref('1');
    return {
        checked
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
    height:100px
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