<template>
<div class='submitBar'>
<div class='moneyBox'>
    <div>TOTAL</div>
    <div>{{$store.state.shopCart.totalPrice}}￥</div>
</div>
<button> 提交订单</button>
</div>
</template>

<style>
.submitBar{
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

button{
    border-radius: 0px;
    border: 0px;
    background-color: #111111;
    width: 300px;
    height: 45px;
    font-size: 14px;
    font-weight: 200;
    color: aliceblue;
    margin-bottom: 10px;
}
</style>