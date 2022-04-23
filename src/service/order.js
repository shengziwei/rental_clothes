import {request} from './base'

export function getOrderList(){
    return request({
   // url: '/api/getOrderList',
    url: 'http://127.0.0.1:4523/mock/831965/api/getOrderList',
    method: 'post'
})
}
