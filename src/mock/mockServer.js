import Mock from 'mockjs';
import data from './data.json'

Mock.mock('https://happyRental/api/getHomeGoodsData','post',{code:0,data:data.home})
Mock.mock('https://happyRental/api/getCategoryGoodsData','post',  {code:0,data:data.category})
