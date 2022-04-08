import Mock from 'mockjs';
import data from './data.json'

Mock.mock('https://happyRental/api/getHomeGoodsData','post',{code:0,data:data.home})
Mock.mock('https://happyRental/api/getCategoryGoodsData','post',  function(option){
var $type=JSON.parse(option.body).type;
if($type=='hot')
return Mock.mock({    
code:0,data:data.category.hot})
if($type=='new')
return Mock.mock({    
code:0,data:data.category.new})
if($type=='price')
return Mock.mock({    
code:0,data:data.category.price})
})
