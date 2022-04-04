import axios from "axios";

export function request(config){
    const instance = axios.create({
            baseURL:"https://happyRental",
            timeout: 3000,
            header:{
            }    
        })
    
    //请求拦截
    instance.interceptors.request.use(config=>{
        return config;
    },
    err=>{
    })

    //响应拦截
    instance.interceptors.response.use(res=>{
        return res.data;
    },err=>{
        //未登录情况下，禁止访问部分网站

    })

    return instance(config);//返回instance(config)的带参函数，而不是instance对象
}

