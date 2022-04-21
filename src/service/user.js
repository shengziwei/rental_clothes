import {request} from './base'

export function registerRequest(data){
    return request({
    url: '/api/register',
    data,
    method: 'post'
})
}

export function loginRequest(data){
    return request({
    url: '/api/login',
    data,
    method: 'post'
})
}

export function getUserInfo(data){
    return request({
    url: '/api/getUserInfo',
    data,
    method: 'post'
})
}
