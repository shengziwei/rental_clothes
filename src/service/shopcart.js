import {request} from './base'

export function getShopCartData(){
    return request({
    //url: '/api/getShopCartData',
    url: 'http://localhost:8080/wx/cart/index',
    method: 'get'
})
}

export function addShopcartData(goodsID,num){
    return request({
    //url: '/api/addShopCartData',
    url: 'http://localhost:8080/wx/cart/add',
    data:{
        goodsId:goodsID,
        productId:goodsID,
        number:num
    },
    method: 'post'
})
}
// export function modifyShopcartData(goodsID,num){
//     return request({
//     url: '/api/modifyShopCartData',
//     data:{
//         goodsID,
//         num
//     },
//     method: 'post'
// })
// }
export function modifyShopcartData(goodsId,productId,number){
    return request({
    url: 'http://localhost:8080/wx/cart/fastadd',
    data:{
        goodsId,
        productId,
        number
    },
    method: 'post'
})
}
// export function deleteShopcartData(goodsID){
//     return request({
//     url: '/api/deleteShopCartData',
//     data:{
//         goodsID
//     },
//     method: 'post'
// })
// }

export function deleteShopcartData(productIds){
    return request({
    url: 'http://localhost:8080/wx/cart/delete',
    data:{
        productIds
    },
    method: 'post'
})
}
export function checkShopcartData(productIds,isChecked){
    return request({
    url: 'http://localhost:8080/wx/cart/checked',
    data:{
        productIds,
        isChecked
    },
    method: 'post'
})
}