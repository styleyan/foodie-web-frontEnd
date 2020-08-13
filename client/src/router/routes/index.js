const routes = [
  {
    path: '/',
    name: 'index',
    component: resolve => require(['../../views/index/Index.vue'], resolve),
  },
  {
    path: '/search',
    name: 'search',
    component: resolve => require(['../../views/search/Index.vue'], resolve),
  },
  {
    path: '/item',
    name: 'item',
    component: resolve => require(['../../views/item/Index.vue'], resolve),
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: resolve => require(['../../views/shopcart/Index.vue'], resolve),
  },
  {
    path: '/order',
    name: 'order',
    component: resolve => require(['../../views/order/Index.vue'], resolve),
  },
  {
    path: '/pay/alipay',
    name: 'alipay',
    component: resolve => require(['../../views/pay/Alipay.vue'], resolve),
  },
  {
    path: '/pay/wxpay',
    name: 'wxpay',
    component: resolve => require(['../../views/pay/Wxpay.vue'], resolve),
  },
  {
    path: '/pay/success',
    name: 'paySuccess',
    component: resolve => require(['../../views/pay/Success.vue'], resolve),
  },
  {
    path: '/user',
    name: 'user',
    component: resolve => require(['../../views/user/Layout.vue'], resolve),
    children: [
      {
        path: '/',
        name: 'userIndex',
        component: resolve => require(['../../views/user/index/Index.vue'], resolve),
      },
      {
        path: 'info',
        name: 'userInfoEdit',
        component: resolve => require(['../../views/user/info/Index.vue'], resolve),
      },
      {
        path: 'address',
        name: 'userInfoAddress',
        component: resolve => require(['../../views/user/address/Index.vue'], resolve),
      },
      {
        path: 'order',
        name: 'userInfoOrder',
        component: resolve => require(['../../views/user/order/Index.vue'], resolve),
      },
      {
        path: 'doComment',
        name: 'userInfoDoComment',
        component: resolve => require(['../../views/user/doComment/Index.vue'], resolve),
      },
      {
        path: 'comment',
        name: 'userInfoComment',
        component: resolve => require(['../../views/user/comment/Index.vue'], resolve),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['../../views/login/Index.vue'], resolve),
  },
]

export default routes
