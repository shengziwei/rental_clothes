import {request} from './base'

export function getGoodsInfo(id){
    return request({
    url: '/api/getGoodsInfo',
    data:{
        id
    },
    method: 'post'
})
}