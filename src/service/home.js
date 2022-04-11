import {request} from './base'

export function getHomeGoodsData(page = 1){
    return request({
    url: '/api/getHomeGoodsData',
    data:{
        page
    },
    method: 'post'
})
}