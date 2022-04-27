import { Coupon } from 'vant'
import {request} from './base'

// export function getOrderList(){
//     return request({
//     url: '/api/getOrderList',
//     method: 'post'
// })
// }
export function getOrderList(showType){
    return request({
    url: 'http://localhost:8080/wx/order/list',
    data:{
        showType:0
    },
    method: 'get'
})
}



export function submitOrder(cartId,addressId){
    return request({
    url: 'http://localhost:8080/wx/order/submit',
    data:{
        cartId,
        addressId,
        couponId:'',
        userCouponId:'',
        message:'',
        grouponRulesId:"",
        grouponLinkedId:""
    },
    method: 'post'
})
}

export function getOrderDetail(orderId){
    return request({
    url: 'http://localhost:8080/wx/order/detail',
    params:{
        orderId
    },
    method: 'get'
})
}

export function payForOrder(orderId){
    return request({
    url: 'http://localhost:8080/wx/order/h5pay',
    data:{
        orderId
    },
    method: 'post'
})
}

export function comfirmForOrder(orderId){
    return request({
    url: 'http://localhost:8080/wx/order/confirm',
    data:{
        orderId
    },
    method: 'post'
})
}

export function submitComment(orderGoodsId,content){
    return request({
    url: 'http://localhost:8080/wx/order/comment',
    data:{
        orderGoodsId,
        content,
        star:0,
        hasPicture:false,
        picUrls:null
    },
    method: 'post'
})
}


