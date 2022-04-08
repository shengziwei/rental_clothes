import {request} from './base'

export function getCategoryGoodsData(type='hot'){
    return request({
    url: '/api/getCategoryGoodsData',
    data:{
        type
    },
    method: 'post'
})
}