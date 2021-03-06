import Mock from 'mockjs';
import data from './data.json'
import goodsInfo from './goods.json'
import user from './user.json'
import shopCart from './shopCart.json'
import address from './address.json'
import order from './order.json'

Mock.mock('http://127.0.0.1:4523/mock/831965/api/getHomeGoodsData','post',{code:0,data:data.home})
Mock.mock('http://127.0.0.1:4523/mock/831965/api/getCategoryGoodsData','post',  function(option){
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
Mock.mock('https://happyRental/api/getUserInfo','post',{code:0,data:user.info})
Mock.mock('https://happyRental/api/login','post',{code:0,data:user.login})
Mock.mock('https://happyRental/api/addShopCartData','post',{code:0,data:shopCart.add})
Mock.mock('https://happyRental/api/getShopCartData','post',{code:0,data:shopCart.get})
Mock.mock('https://happyRental/api/modifyShopCartData','post',{code:0,data:shopCart.modify})
Mock.mock('https://happyRental/api/deleteShopCartData','post',{code:0,data:shopCart.delete})
Mock.mock('https://happyRental/api/getAddress','post',{code:0,data:address})
Mock.mock('https://happyRental/api/getOrderInfo','post',{code:0,data:order.data})