import Mock from 'mockjs';
import data from './data.json'

Mock.mock('/api/getHomeGoodsData',{code:0,data:data.info})