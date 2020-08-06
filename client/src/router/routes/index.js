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
]

export default routes
