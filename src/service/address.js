import {request} from './base'

export function getAddress(){
    return request({
    //url: '/api/getAddress',
    url:'http://127.0.0.1:4523/mock/831965/api/getAddress',
    method: 'post'
})
}

export function getAddressList(){
    return request({
    //url: '/api/getAddressList',
    url:'http://127.0.0.1:4523/mock/831965/api/getAddressList',
    method: 'post'
})
}
export function getAddressDetail(aid){
    return request({
    //url: '/api/getAddressDetail',
    url:'http://127.0.0.1:4523/mock/831965/api/getAddressDetail',
    data:{
        aid
    },
    method: 'post'
})
}

export function saveAddress(data){
    return request({
    //url: '/api/getAddressDetail',
    url:'http://127.0.0.1:4523/mock/831965/api/saveAddress',
    data,
    method: 'post'
})
}

