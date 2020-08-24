import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    // 用户信息
    userInfo: {},
    // 购物车信息
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
      const _id = shopData.info.id
      const newShopCard = { ...state.shopCard }
      if (newShopCard[_id]) {
        newShopCard[_id].number += shopData.number
      } else {
        newShopCard[_id] = {
          info: shopData.info,
          number: shopData.number,
        }
      }
      state.shopCard = newShopCard
    },
    /**
     * 更新购物车数量
     */
    updateShopNumber(state) {
      const keys = Object.keys(state.shopCard)
      let num = 0

      keys.forEach((item) => {
        num += state.shopCard[item].number
      })

      state.shopNumber = num
    },
  },
  actions: {
    /**
     * 添加购物车
     */
    addShopCard(store, shopData) {
      store.commit('updateShopCard', shopData)
      store.commit('updateShopNumber')
    },
  },
})
