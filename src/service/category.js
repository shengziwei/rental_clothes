import {request} from './base'

export function getCategoryGoodsData(type='hot',page=1){
    return request({
    url: '/api/getCategoryGoodsData',
    data:{
        type,
        page
    },
    method: 'post'
})
}