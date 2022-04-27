<template>
    <div class='orderItem'>
        <img :src='item.picUrl'/>
        <div class='infoBox'>
            <div class='name'>{{item.goodsName}}</div> 
            <div class='price'>￥{{item.price}}</div>
                <button v-if='status===4' @click="goFather(item.id)">去 评 价</button>
        </div>
        <div class='num'>×{{item.number}}/天</div>
    </div>
</template>

<script>
export default {
    name: "orderItem",
    components:{

    },
    props:{
        item:{
            type: Object,
            default(){
                return {}
            }
        },
        status:{
            type:Number,
            default:0
        }
    },
    setup(props,{emit}) {
        console.log(props.item);
        const goFather=(orderGoodsId)=>{
            console.log(orderGoodsId)
            emit('getCommentInfo',orderGoodsId)
        }
        return{
            goFather
        }
    },
}
</script>

<style lang="scss" scoped>
.orderItem{
    display: flex;
    flex-direction: row;
    width: 400px;
    height: 80px;
    justify-content: center;
    margin-top: 10px;
}
.orderItem img{
    height: 80px;
    width: 80px;
    border-radius: 10px;
    
}
.infoBox{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 40px;
    width: 32%
}
.name{
    font-size: 16px;
    font-weight: bold;
}
.price{
    font-size:20px;
    font-family:'VisbyCf-Bold';
    margin-top: 5px
}

.num{   
    margin: 25px;
    padding-right: 20px;
    color: gray;
    width: 50px
}
button{
    border-radius: 0px;
    border: 0px;
    background-color: #111111;
    width: 90px;
    height: 35px;
    font-size: 14px;
    font-weight: 200;
    color: aliceblue;
    margin-bottom: 10px;
}
</style>
