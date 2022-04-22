import {request} from './base'

export function getShopcartData(){
    return request({
    url: '/api/getShopCartData',
   // url:'http://127.0.0.1:4523/mock/831965/api/getShopCartData',
    method: 'post'
})
}

export function addShopcartData(goodsID,num){
    return request({
    url: '/api/addShopCartData',
    data:{
        goodsID,
        num
    },
    method: 'post'
})
}
export function modifyShopcartData(goodsID,num){
    return request({
    url: '/api/modifyShopCartData',
    data:{
        goodsID,
        num
    },
    method: 'post'
})
}
export function deleteShopcartData(goodsID){
    return request({
    url: '/api/modifyShopCartData',
    data:{
        goodsID
    },
    method: 'post'
})
}