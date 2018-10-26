import Vue from 'vue';

const Http = function () {

  /** http 设置全局配置 **/
  Vue.http.options.root = 'http://127.2.22.2:8080/';
  

  //请求发送前的处理逻辑
  Vue.http.interceptors.push(function (request, next) {

    // 请求发送前的处理逻辑
    request = Object.assign({
      method: 'POST',
      timeout: 10000,
      headers: {
        'Accept': 'application/json,text/json',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      showLoading: true,
    }, request);
    console.log(request)

    //发送请求前加显示loading
    if (request.showLoading === true) {
      Vue.$loading.show({
        show: true,
        msg: "拦截器的加载"
      });
      Vue.$loading.add();
    }

    next(function (response) {
      //发送请求后隐藏loading
      if (request.showLoading === true) {
        Vue.$loading.minus();
        console.log(Vue.$loading.amount);
        if (Vue.$loading.amount === 0) {
          Vue.$loading.hide();
        }
      }
      return response
    })
  });

  //请求完成的-断网处理
  Vue.http.interceptors.push(function (request, next) {
    next(function (response) {
      if (response.status === 0) {
        console.log('断网了');
      }
      return response
    })
  });

  //请求完成的-404处理
  Vue.http.interceptors.push(function (request, next) {
    next(function (response) {
      if (response.status === 404) {
        console.log('404了');
      }
      return response
    })
  });

  //请求完成的-异常处理
  Vue.http.interceptors.push(function (request, next) {
    next(function (response) {
      if (response.status === 200)
        switch (+response.body.resultCode) {
          case 0:
            console.log('错误了')
            break

          case 9999:
            console.log('登录超时了')
            break
        }

      return response
    })
  });

}



export default Http


/** 请求拦截demo ******/
  //设置请求域
  // Vue.http.options.root = 'http://127.0.0.1:8081/';
  //如果请求是基于这个域
  //错误: this.$http.get("/list.json"），不然是基于页面域名的请求
  //正确： this.$http.get("list.json"）

  //设置请求头
  // Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';

  //Vue组件内设置默认值选项。
  // new Vue({
  //     http: {
  //         root: '/root',
  //         headers: {
  //             Authorization: 'Basic YXBpOnBhc3N3b3Jk'
  //         }
  //     }
  // })

  // Vue.http.interceptors.push(function (request, next) {
  //   // modify method
  //   request.method = 'POST';
  //   // modify headers
  //   request.headers.set('X-CSRF-TOKEN', 'TOKEN');

  //   //直接返回，不发送请求了
  //   return request.respondWith(request, {
  //       status: 404,
  //       statusText: 'Not found'
  //   });

  //   next(function (response) {
  //     // ...
  //     // 请求发送后的处理逻辑
  //     // ...
  //     // 根据请求的状态，response参数会返回给successCallback或errorCallback
  //     console.log('response-1111')
  //     return response
  //   })
  // });
