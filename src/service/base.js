import router from "@/router";
import axios from "axios";
import { Toast } from "vant";

export function request(config){
    const instance = axios.create({
            baseURL:"http://127.0.0.1:4523/mock/831965",
            timeout: 3000,
            header:{
            }    
        })
    
    //请求拦截
    instance.interceptors.request.use(config=>{
        const token = window.localStorage.getItem("token");
        if(token){
            config.headers.Authorization = token;
        }
        return config;
    },
    err=>{
    })

    //响应拦截
    instance.interceptors.response.use(res=>{
        return res.data;
    },err=>{
    //未登录/登录但未注册会员情况下，禁止访问部分网页
    if(err.response.status == '401')
    {
        Toast.fail("未登录！")
        router.push({path:'/login'})
    }
        console.log(err)

    })
    return instance(config);//返回instance(config)的带参函数，而不是instance对象
}

