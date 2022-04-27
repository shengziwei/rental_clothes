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
    //url:'/api/login'
    url: 'http://localhost:8080/wx/auth/login',
    data,
    method: 'post'
})
}

export function getUserInfo(data){
    return request({
    //url:'/api/getUserInfo'
    url: 'http://localhost:8080/wx/auth/info',
    data,
    //method: 'post'
    method:'get'
})
}
