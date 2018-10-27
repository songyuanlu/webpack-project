import Vue from 'vue';
import VueRouter from 'vue-router';
// import Vuex from 'vuex';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';



import Routers from '@assets/tool/router';
import store from '@store';
// import Store from '@assets/tool/store.js'
import HttpInterceptor from '@assets/http/interceptor.js';
import Loading from "@components/loading/loading.js";

import servers from '@servers';


import App from '@/app.vue';

// import 'element-ui/lib/theme-chalk/index.css';
import '@assets/lib/element-ui/css/index.css';
import '@less/style.less';

Vue.use(VueRouter);
// Vue.use(Vuex);
Vue.use(VueResource);
HttpInterceptor();
Vue.use(Loading);
Vue.use(ElementUI);
Vue.use(servers);

console.log('process.env.NODE_ENV')
console.log(process.env.NODE_ENV)

// 路由配置
const RouterConfig = {
    // 使用 HTML5 的 History 路由模式
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
});

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});


// const store = new Vuex.Store(Store);

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => {
        return h(App)
    }
});