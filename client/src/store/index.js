import Vuex from 'vuex'
import apis from '../api/index'
import Cookies from 'js-cookie'
import router from '../router'

export default new Vuex.Store({
  state: {
    // 用户信息
    userInfo: {},
    /**
     * 购物车信息, 数据结构如下:
     * {
     *    "商品规格id": {
     *        itemId: '',
     *        itemImgUrl: '',
     *        itemName: '',
     *        specId: '',
     *        specName: '',
     *        buyCounts: '',
     *        priceDiscount: '',
     *        priceNormal: ''
     *    },
     *    ...
     * }
     */
    shopCard: {},
    // 购物车数量
    shopNumber: 0,
  },
  mutations: {
    /**
     * 更新用户信息
     */
    updateUser(state, userInfo) {
      state.userInfo = userInfo
    },
    /**
     * 更新购物车信息
     */
    updateShopCard(state, shopData) {
      const _id = shopData.specId
      const newShopCard = { ...state.shopCard }
      if (newShopCard[_id]) {
        newShopCard[_id].buyCounts += shopData.buyCounts
      } else {
        newShopCard[_id] = shopData
      }
      state.shopCard = newShopCard
    },
    /**
     * 更新购物车数量
     */
    updateShopNumber(state) {
      const keys = Object.keys(state.shopCard)
      let num = 0

      keys.forEach((key) => {
        num += state.shopCard[key].buyCounts
      })

      state.shopNumber = num
    },
  },
  actions: {
    /**
     * 添加购物车
     */
    async addShopCard({ commit }, shopData) {
      /**
       * 已登录: 则需要同步到 redis 中
       * 未登录: 同步到 cookies 或 lockstore 中
       */
      commit('updateShopCard', shopData)
      commit('updateShopNumber')

      const result = await apis.shopCartAdd({...shopData})

      console.log(result)
    },
    /**
     * 从购物车中删除
     */
    removeShopCard(store, shopInfo) {

    },
    /**
     * 退出登录
     */
    userLogout() {
      Cookies.remove('u_info')
      router.push({
        name: 'login',
      })
    },
  },
})
