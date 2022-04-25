import {request} from './base'

export function payForGoods(id){
    return request({
    url: '/api/pay',
    data:{
        id
    },
    method: 'post'
})
}
export function getAddress(uid){
    return request({
    //url: '/api/getAddress',
    url:'http://127.0.0.1:4523/mock/831965/api/getAddress',
    data:{
        uid
    },
    method: 'post'
})
}
export function getOrderGoodsInfo(goodsId=[]){
    return request({
  //  url: '/api/getOrderInfo',
    url: 'http://127.0.0.1:4523/mock/831965/api/getOrderInfo',
    data:{
        goodsId
    },
    method: 'post'
})
}