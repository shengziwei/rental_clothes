import {request} from './base'

export function getShopcartData(data){
    return request({
    url: '/api/getShopCartData',
    data:{
        data
    },
    method: 'post'
})
}

export function addShopcartData(data){
    return request({
    url: '/api/addShopCartData',
    data,
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