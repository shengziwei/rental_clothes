import {request} from './base'

export function getOrderList(){
    return request({
    url: '/api/getOrderList',
    method: 'post'
})
}
