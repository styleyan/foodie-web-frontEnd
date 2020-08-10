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
    path: '/pay',
    name: 'pay',
    component: resolve => require(['../../views/pay/Index.vue'], resolve),
  },
]

export default routes
