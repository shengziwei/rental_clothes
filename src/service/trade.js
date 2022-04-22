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
    url: '/api/getAddress',
    data:{
        uid
    },
    method: 'post'
})
}
export function getOrderGoodsInfo(goodsId=[]){
    return request({
    url: '/api/getOrderInfo',
    data:{
        goodsId
    },
    method: 'post'
})
}