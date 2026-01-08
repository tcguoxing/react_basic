/*
axios的封装逻辑
根域名配置
超时时间
请求拦截器/ 响应ID
 */

import axios from 'axios'
import {message} from "antd";
import {getToken, removeToken} from '@/utils'
import router from "@/router"



const request = axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    timeout: 10000,
    headers:{
        Authorization: ''
    }
})

// 添加请求拦截器
// 请求发送之前
request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    const token = getToken()
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    console.log('request error: ', error)
    return Promise.reject(error);
});

// 添加响应拦截器
//
request.interceptors.response.use(function (response) {
    console.log('response info: ', response)

    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (String(response.status).indexOf('20') > -1) {
        return response.data;
    } else {
        throw new Error(response.message)
    }
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    console.log('response error status: ', error)
    // const navigate = useNavigate()
    if (error.response.status === 401) {
        console.log('response error: ', error)
        removeToken()
        router.navigate('/login')
        window.location.reload()
    } else {
        // throw new Error(response.message)
        message.error(error.message)
    }
    // return Promise.reject(error.message);
});

export default request
