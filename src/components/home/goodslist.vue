<template>
 <div class='goods-list'>
   <div class="wrapper" ref="wrapper">
     <div class="content">
    <div class='goods-item' v-for="item in goodsData" :key="item.id">
     <a href="" @click.prevent = 'goDetail(item.id)' ><!--取消原来的事件，使用自定义事件-->
     <goods :item="item"></goods>
      </a>
  </div>
  </div>   
  </div>
  </div>
</template>

<script>
import goods from '@/components/home/goods.vue'
import {useRouter} from 'vue-router'
import {ref, onMounted,reactive,watchEffect,nextTick } from 'vue'
import BScroll from 'better-scroll'


export default {
    name: 'GoodsList',
    components:{
        goods
    },
    props:{
        goodsData: {
            type: Object,
            default(){
              return {}
            }
        }
    },
    setup(props,{emit}) {
      const router = useRouter();
      let bscroll = reactive({});
      const wrapper = ref(null);
      let page=1;

      const getGoodsListData = (page) =>{
        emit('getData',page);
        console.log(props.goodsData.length)
      }

      const goDetail = (id) =>{
      router.push({
      name: 'Detail',
      params: {
          id
        }
      })
    } 
    onMounted(()=>{
      bscroll = new BScroll(wrapper.value,{
        probeType: 3,
        click: true,
        pullUpLoad: true, //滚动加载更多
        observeDOM: true
      });
       //触发滚动事件
    bscroll.on('scroll',(position)=>{
       //滚动后刷新页面，重新计算新的区域的高度
       //需要使用refresh方法
    })

      bscroll.on('pullingUp',()=>{
      page = page+1;
      if(page>10)
      {this.bscroll.finishPullUp();
      this.bscroll.closepullUp();
      }
      getGoodsListData(page);

      setTimeout(()=>{
      bscroll.finishPullUp();
      },2000)

      bscroll.refresh();
    })
  });
    //监听变量变化
    watchEffect(props.goodsData,()=>{
    //延迟执行数据更新，dom渲染完成后进行数据更新
     nextTick(()=>{
      bscroll && bscroll.refresh();
    })
  })
    return{
        goDetail,
        wrapper,
        getGoodsListData
    }
        
    }
}
</script>

<style>
.goods-list{
  position: relative;
}

.goods-item{
  margin: 20px;
  padding: 0 20px;
  align-items: center;
}
.wrapper{
  position: absolute;
  left: 0px;
  right: 0px;
  bottom:  0px;
  top: 0px;
  height: 600px;
  overflow: hidden;
}
.content{
  display: flex;
  padding-bottom: 50px;
  align-content: center;
  font-size: 10px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>