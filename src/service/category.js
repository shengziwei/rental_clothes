import {request} from './base'

export function getCategoryGoodsData(page=1,category=-1){
    return request({
    url: '/api/getCategoryGoodsData',
    data:{
        page,
        category
    },
    method: 'post'
})
}