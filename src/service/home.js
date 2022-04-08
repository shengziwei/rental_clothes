import {request} from './base'

export function getHomeGoodsData(){
    return request({
    url: '/api/getHomeGoodsData',
    method: 'post'
})
}