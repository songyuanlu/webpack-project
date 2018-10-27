const routers = [
  {
    path: '/login',
    meta: {
      title: '登录'
    },
    component: (resolve) => require(['@views/login.vue'], resolve)
  },
  {
    path: '/',
    meta: {
      title: '主页'
    },
    component: (resolve) => require(['@views/home.vue'], resolve),
    redirect: '/index',
    children: [
      {
        path: 'index',
        component: (resolve) => require(['@views/index.vue'], resolve),
        meta: {
          title: "主页"
        }
      },
      {
        path: 'manager',
        component: (resolve) => require(['@views/manager.vue'], resolve),
        meta: {
          title: "应用"
        }
      },
      {
        path: 'video',
        component: (resolve) => require(['@views/video.vue'], resolve),
        meta: {
          title: "视频"
        }
      },
    ]
  },
  // {
  //   path: '/index',
  //   meta: {
  //     title: '首页'
  //   },
  //   component: (resolve) => require(['@views/index.vue'], resolve)
  // },
  // {
  //   path: '/manager',
  //   meta: {
  //     title: '用具管理'
  //   },
  //   component: (resolve) => require(['@views/manager.vue'], resolve)
  // },
  // {
  //   path: '/video',
  //   meta: {
  //     title: '视频管理'
  //   },
  //   component: (resolve) => require(['@views/video.vue'], resolve)
  // },
  {
    path: '*',
    redirect: '/index'
  }
];
export default routers;