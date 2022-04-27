import { Coupon } from 'vant'
import {request} from './base'

export function getOrderList(){
    return request({
    url: '/api/getOrderList',
    method: 'post'
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

