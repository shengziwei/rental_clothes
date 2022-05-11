<template>
    <div class='category-view'>
        <div class="menu">
            <van-sidebar v-model="activeKey">
            <van-collapse v-model="activeNames">
                <van-collapse-item v-for="item,index in category" :key='index'
                                                            :title= 'item.name'
                                                            :name ="item.name">
                    <!-- <van-sidebar v-model="activeKey" @change="onChange"> -->
                        <van-sidebar-item v-for='sub,index in item.children'
                                          :key ='index'
                                          :title ='sub'
                                          @click="getGoods(index)"/>
                      <!-- </van-sidebar>  -->
                </van-collapse-item>
              </van-collapse>
            </van-sidebar> 
        </div>
        <div class="content">
            <div class="tab">
                <tab-control @tabClick="tabClick"  :titles="['最新上架','价格','热销']"></tab-control> 
            </div>
        <div class="wrapper">
        <better-scroll class="scroll-list" ref="scrollList" @loadMore="loadMore">
            <goods-list :goodsData="currentGoods"></goods-list>
        </better-scroll>
    </div>
    </div>
    </div>
</template>

<script>
import TabControl from '@/components/utils/TabControl.vue'
import {getCategoryGoodsData} from '@/service/category.js'
import { computed, onMounted, reactive, ref } from '@vue/runtime-core'
import GoodsList from '@/components/home/goodslist.vue'
import BetterScroll from '@/components/utils/BetterScroll.vue'

export default {
    name: 'Category',
    components:{
        TabControl,
        GoodsList,
        BetterScroll
    },
    setup() {
        // const goodsData = reactive({
        //     new: {list:[]},
        //     hot:{list:[]},
        //     price:{list:[]}
        // });
        const goodsData = ref([]); 
        const scrollList = ref([])

        let currentType = ref('time');
        let page =1;
        let currentCategory = ref(1);

        const activeKey = ref(-1);
        const activeNames = ref(['1']);
        const category=reactive({
            1:{name:'上装\nTOP',children:['衬衫','卫衣','外套','T恤']},
            2:{name:'下装\nBOTTOM',children:['牛仔裤','运动裤','休闲裤']},
            3:{name:'裙装\nDRESS',children:['连衣裙','半身裙']}
        });
        
        const loadMore = () =>{
            page = page+1;
            getCategoryGoodsData(page,currentCategory.value).then(res=>{
            goodsData.value.push(...res.data.goodsInfo);
            scrollList.value.scroll.finishPullUp();
            scrollList.value.scroll.refresh();
            console.log("categoryview的getData获得"+goodsData.value.length);
            })
        }

        const currentGoods = computed(() =>{
            return goodsData.value;
        })

        const getGoods = (index) =>{
            currentCategory.value = index;
            getCategoryGoodsData(page,currentCategory.value).then( res=>{
                    console.log(res)
                    goodsData.value = res.data.goodsInfo;
                })
        }

        onMounted(()=>{
            getCategoryGoodsData().then( res=>{
                    console.log(res)               
                    goodsData.value = res.data.goodsInfo
                })
        })  
        
    
        const tabClick = (index) => {
            let types = ['id','counterPrice','id'];
            console.log(sortByKey(goodsData.value,types[index]));
            currentType.value = types[index];
            console.log(currentType.value)
        };     
        
        const sortByKey=(array,key)=>{
            return array.sort(function(a,b){
                var x=a[key];
                var y=b[key];
                return ((x<y)?-1:((x<y)?1:0));
            });
        }

        return{
            goodsData,
            currentGoods,
            currentCategory,
            tabClick,
            activeKey,
            activeNames,
            getGoods,
            category,
            sortByKey,
            loadMore,
            scrollList
        }
    },
}
</script>

<style scoped>
    .category-view{
        display: flex;
        width: 100%
    }
    .content{
        width: 100%;
        height: 100vh
    }
    .menu{
        margin-top: 40px;
        width: 100px;
        height: 100vh;
        font-family: 'VisblyCF-Thin';
        background-color: rgb(252, 225, 225,0.1);
    }
    .van-collapse{
        width: 100px;
    }
    .van-sidebar{
        width:100px;
        padding: 0;
        margin:0
    }
    .van-sidebar-item{
        --van-sidebar-line-height:10px;
        background-color: white;
    }
    .wrapper{
        margin-top: 90px;
    }
    .scroll-list{
        margin-left: 100px;
        position: absolute;
        top: 0px;
        left: 0px;
         bottom: 0px;
         right: 0px;
         overflow: hidden;
    }
</style>