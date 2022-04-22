<template>
    <div class='orderItem'>
        <img :src='item.cover_url'/>
        <div class='infoBox'>
            <div class='name'>{{item.name}}</div> 
            <div class='price'>￥{{item.price}}</div>
        </div>
        <div class='num'>×{{item.num}}/天</div>
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
        }
    },
    setup() {
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
    width: 30%
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
</style>
