import {request} from './base'

// export function getGoodsInfo(id){
//     return request({
//     url: '/api/getGoodsInfo',
//     data:{
//         id
//     },
//     method: 'post'
// })
// }

export function getGoodsInfo(id){
    return request({
    url: 'http://localhost:8080/wx/goods/detail',
    params:{
        id
    },
    method: 'get'
})
}
