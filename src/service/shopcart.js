import {request} from './base'

export function getShopcartData(){
    return request({
    url: '/api/getShopCartData',
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