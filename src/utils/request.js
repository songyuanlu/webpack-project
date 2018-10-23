import axios from 'axios';

const Util = {

};
Util.ajax = axios.create({
    baseURL: '127.0.0.1'
});


// 添加一个请求拦截器
Util.ajax.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// 添加一个响应拦截器
Util.ajax.interceptors.response.use(function (response) {
    // Do something with response data
    console.log('response ------------')
    console.log(response)
    return response;
}, function (error, a, b ,c) {
    console.log('error ------------')
    console.log(error)
    console.log(a)
    console.log(b)
    console.log(c)
    // Do something with response error
    return Promise.reject(error);
});


export default Util;