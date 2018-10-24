const http = function ($http) {
  /** http 设置全局配置 **/

  //设置请求域
  // Vue.http.options.root = 'http://127.0.0.1:8081/';
  $http.options.root = 'http://10.2.30.73/user/';
  //如果请求是基于这个域
  //错误: this.$http.get("/list.json"），不然是基于页面域名的请求
  //正确： this.$http.get("list.json"）

  //设置请求头
  $http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';

  //Vue组件内设置默认值选项。
  // new Vue({
  //     http: {
  //         root: '/root',
  //         headers: {
  //             Authorization: 'Basic YXBpOnBhc3N3b3Jk'
  //         }
  //     }
  // })

  /** 拦截器 **/
  $http.interceptors.push(function (request, next) {
    // ...
    // 请求发送前的处理逻辑
    // ...
    console.log('request-1111')

    // modify method
    request.method = 'POST';
    // modify headers
    request.headers.set('X-CSRF-TOKEN', 'TOKEN');

    //直接返回，不发送请求了
    // return request.respondWith(request, {
    //     status: 404,
    //     statusText: 'Not found'
    // });

    next(function (response) {
      // ...
      // 请求发送后的处理逻辑
      // ...
      // 根据请求的状态，response参数会返回给successCallback或errorCallback
      console.log('response-1111')
      return response
    })
  });
  $http.interceptors.push(function (request, next) {
    // ...
    // 请求发送前的处理逻辑
    // ...
    console.log('request-22222')//request先走了这里
    next(function (response) {
      // ...
      // 请求发送后的处理逻辑
      // ...
      // 根据请求的状态，response参数会返回给successCallback或errorCallback
      console.log('response-22222')
      return response
    })
  })
  /** http 设置全局配置 **/
}

export default http;