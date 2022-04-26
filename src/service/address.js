import {request} from './base'

export function getAddress(){
    return request({
    url: '/api/getAddress',
    method: 'post'
})
}

export function getAddressList(){
    return request({
    url: '/api/getAddressList',
    method: 'post'
})
}
export function getAddressDetail(aid){
    return request({
    url:'/api/getAddressDetail',
    data:{
        aid
    },
    method: 'post'
})
}

export function saveAddress(data){
    return request({
    url: '/api/getAddressDetail',
    data,
    method: 'post'
})
}

