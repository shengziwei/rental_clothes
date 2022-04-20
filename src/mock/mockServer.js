import Mock from 'mockjs';
import data from './data.json'
import goodsInfo from './goods.json'
import user from './user.json'

Mock.mock('https://happyRental/api/getHomeGoodsData','post',{code:0,data:data.home})
Mock.mock('https://happyRental/api/getCategoryGoodsData','post',  function(option){
var $category=JSON.parse(option.body).category;
if($category==-1)
return Mock.mock({    
code:0,data:data.category.all})
if($category==0)
return Mock.mock({    
code:0,data:data.category.tshirt})
if($category==1)
return Mock.mock({    
code:0,data:data.category.sweater})
if($category>=2)
return Mock.mock({    
code:0,data:data.category.overcoat})
})

Mock.mock('https://happyRental/api/getGoodsInfo','post',{code:0,data:goodsInfo})
Mock.mock('https://happyRental/api/register','post',{code:0,data:user.register})
Mock.mock('https://happyRental/api/login','post',{code:0,data:user.login})