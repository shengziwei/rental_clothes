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
    setup({emit}) {
        const num = ref(1);
        const action = (a) =>{
            if(a===1)
            num.value ++;
            else
            if(num.value>=2)
            num.value --;

            console.log(num.value)
        }
               
        
        return{
            num,
            action
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
    width: 70%;
    height: 20px;
    font-family: 'VisbyCF-Thin';
    font-weight: bold;
}
.line {
	height: 5px;
    transform:scale(1 , 0.2);   
	background-color: #111111;
	margin:10px 30px;
}
.control{
    height: 10px;
    width: 10px;
}
</style>