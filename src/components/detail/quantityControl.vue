<template>
    <div class='quantity-control'>
        <div class='line'></div>
        <div class='number-box'>
            <img class='control' src="@/assets/images/icon-minus.svg" @click="action(-1)">
        <input type='text' readonly: v-model="num">
        <img class='control' src="@/assets/images/icon-plus.svg" @click='action(1)'>
        </div>
         <div class='line'></div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
   name: 'QuantityControl',
   props: {
       modelValue:{
           type: Number,
           default: 1
       },
       item_id:{
           type: Number,
           default: 1
       }
    },
    setup(props,{ emit }) {
        // const num = ref(1)
        const num = ref(1);
        num.value = props.modelValue
        
        const action = (a) =>{
            if(a===1)
            num.value++;
            else
            if(num.value>=2)
            num.value --;
            emit('postToDetail',num.value,item_id)
            console.log(num.value)
        }
               
    
        return{
            action,
            num
            }
        }
}
</script>

<style scoped>
.number-box{

}
input{
    border: transparent;
    text-align: center;
    align-items: center;
    width: 85%;
    height: 35px;
    font-family: 'VisbyCF-Thin';
    font-weight: bold;
}
.line {
	height: 2px;
    width:100%;
    transform:scale(1 , 0.2);   
	background-color: #111111;
}
.control{
    height: 10px;
    width: 10px;

}
</style>