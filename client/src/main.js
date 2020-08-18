import Vue from 'vue'
import './assets/style/index.styl'
import './plugins'
import store from './store'
import router from './router'
import App from './App.vue'
import Cookies from 'js-cookie'

Vue.config.productionTip = false

const userInfo = Cookies.getJSON('u_info')
if (userInfo) {
  store.commit('updateUser', userInfo)
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
