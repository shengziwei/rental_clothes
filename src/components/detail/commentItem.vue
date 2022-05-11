<template>
    <div class='comment'>
    
     <van-image
           round
           width="50"
           height="50"
           :src='item.avatar'
            />
            <div class='commentBox'>
                <div class='name'>{{item.nickname}}</div> 
                <div class='conetnt'>{{item.content}}</div>
                </div>
                <div class='time'>{{item.addTime}}</div>
    </div>
</template>

<script>
export default {
    name:'Comment',
    components:{

    },
    props:{
        item:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    setup(props) {    
    },
}
</script>

<style scoped>
.comment{
    display: flex;
    width: 100%;
    font-family: 'ViscyCF-Bold';
    justify-content: space-evenly;
    background: rgba(248, 216, 216, 0.73);
    margin-bottom: 5px;
    border-radius: 20px;
}
.commentBox{
    width: 40%;
    text-align: left;
    margin:10px

}
.name{
    font-size:17px;
    font-family: 'VisbyCF-Bold';
    font-weight:bold;
    margin-bottom:10px
}
.time{
    margin-top:50px;
    margin-right:5px
}
</style>