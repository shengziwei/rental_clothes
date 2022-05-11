import {request} from './base'

export function getHomeGoodsData(page = 1){
    return request({
    url: '/api/getHomeGoodsData',
    //url:'http://localhost:8080/wx/home/index',
    data:{
        page
    },
    method: 'post'
})
}

// export function getSearchResult(description=''){
//     return request({
//     url: '/api/getSearchResult',
//     data:{
//         description
//     },
//     method: 'post'
// })
// }
export function getSearchResult(description){
    return request({
    url: 'http://localhost:8080/wx/goods/list',
    params:{
        keyword:description
    },
    method: 'get'
})
}
