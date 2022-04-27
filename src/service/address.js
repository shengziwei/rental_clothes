import {request} from './base'

export function getAddress(){
    return request({
    url: '/api/getAddress',
    method: 'post'
})
}

export function getAddressList(){
    return request({
    // url: '/api/getAddressList',
    url:'http://localhost:8080/wx/address/list',
    method: 'get'
})
}
// export function getAddressDetail(aid){
//     return request({
//     url:'/api/getAddressDetail',
//     data:{
//         aid
//     },
//     method: 'post'
// })
// }
export function getAddressDetail(id){
    return request({
    url:'http://localhost:8080/wx/address/detail',
    params:{
        id
    },
    method: 'get'
})
}

// export function saveAddress(data){
//     return request({
//     url: '/api/getAddressDetail',
//     data,
//     method: 'post'
// })
export function saveAddress(address){
    return request({
    url: 'http://localhost:8080/wx/address/save',
    data:address,
    method: 'post'
})
}

export function deleteAddress(id){
    return request({
    url: 'http://localhost:8080/wx/address/delete',
    data:{
        id
    },
    method: 'post'
})
}


