<template>
<div class='EditAddressView'>
    <van-field 
    v-model='name'
    label="收货人"
    placeholder="请填写姓名"
    ></van-field>
  <van-field 
    label="联系电话"
    v-model = 'phone'
    placeholder="请填写"
    ></van-field>
    <van-field
        v-model="fieldValue"
        is-link
        readonly
        label="地区"
        placeholder="请选择所在地区"
        @click="show = true"
        />
        <van-popup v-model:show="show" round position="bottom">
            <van-cascader
            v-model="cascaderValue"
            title="请选择所在地区"
            :options="options"
            @finish="onFinish"
             />
             </van-popup>
        <van-field v-model="detail_address"
             label="详细地址"
             placeholder="请填写"
        >
        </van-field>
<button @click='onSave'>保存</button>
</div>
</template>

<script>
import { onMounted, reactive, ref, toRefs } from 'vue';
import data from '@/components/utils/AddressOptions.json'
import { useRoute, useRouter } from 'vue-router';
import { getAddressDetail, saveAddress } from '@/service/address';

export default {
  setup() {
    const show = ref(false);
    const fieldValue = ref('');
    const cascaderValue = ref('');
    const addressInfo = reactive({
        name:null,
        phone:null,
        county:null,
        detail_address:null
    })
    // 选项列表，children 代表子选项，支持多级嵌套
    const options =ref([])
    const route = useRoute();
    const router = useRouter();

    onMounted(()=>{
      if(route.query.aid)
      {
      getAddressDetail(route.query.aid).then(res=>{
        addressInfo.name = res.data.name
        addressInfo.phone = res.data.phone
        addressInfo.county = res.data.address
        addressInfo.detail_address = res.data.addressDetail
        fieldValue.value = addressInfo.county
      })
      }
    })

    data.aProvince.forEach((element,index) => {
        let optionItem = reactive({
        text:null,
        children:[],
        code:null
    })
        optionItem.text = element
        data.aCity[index].forEach(item=>{
            optionItem.children.push(
              {text:item,
               children:[]   
              })
        })
        data.aCountry[index].forEach((item,index)=>{
              item.forEach((child)=>{
         optionItem.children[index].children.push({
           text:child
         })
         })
          })
        options.value.push(optionItem)
       
    });

    const onSave=()=>{
      console.log("hello")
        saveAddress(addressInfo).then(res=>{
          console.log(res)
          if(res.status==='success')   
          router.go(-1)  
        addressInfo.value =null
        })
    }

    // 全部选项选择完毕后，会触发 finish 事件
    const onFinish = ({ selectedOptions }) => {
      show.value = false;
      fieldValue.value = selectedOptions.map((option) => option.text).join('/');
    };

    return {
      show,
      options,
      onFinish,
      fieldValue,
      cascaderValue,
      ...toRefs(addressInfo),
      data,
      onSave

    };
  },
};
</script>


<style scoped>
button{
    width: 300px;
    margin: 10px 10px;
    font-size: 16px;
    border: transparent;
    border-radius: 20px;
    color: white;
    background-color: brown;
    height: 40px;
    position: fixed;
    bottom: 60px;
    left:35px;
}
.van-field{
  height: 60px;
  font-size:16px;
  padding: 20px
}
</style>