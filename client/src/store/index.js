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
     * 初始化购物车
     */
    initCard(state, cards) {
      state.shopCard = cards
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
     * 未登录更新
     */
    noLoginUpdateCard(state, shopData) {
      let ckShop = Cookies.getJSON('shopCard') || {}

      if (!ckShop[shopData.specId]) {
        ckShop[shopData.specId] = shopData
      } else {
        ckShop[shopData.specId].buyCounts = ckShop[shopData.specId].buyCounts + shopData.buyCounts
      }

      Cookies.set('shopCard', ckShop)
      state.shopCard = ckShop
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
    /**
     * 删除购物车
     */
    deleteShopCard(state, shopData) {
      const newCard = {}
      Object.keys(state.shopCard).forEach((key) => {
        if (key !== shopData.specId) {
          newCard[key] = state.shopCard[key]
        }
      })
      Cookies.set('shopCard', newCard)
      state.shopCard = newCard
    },
  },
  actions: {
    /**
     * 添加购物车
     */
    async addShopCard({ commit, state }, shopData) {
      // 未登录
      if (!state.userInfo.id) {
        commit('noLoginUpdateCard', shopData)
      } else {
        const result = await apis.shopCartAdd({ ...shopData })
        if (result) {
          commit('updateShopCard', shopData)
        }
      }
      commit('updateShopNumber')
    },
    /**
     * 合并购物车
     */
    async mergerShopCard({ commit, state }) {
      let ckShop = Cookies.getJSON('shopCard')
      // 用户未登录，直接登录同步到购物车中
      if (!state.userInfo.id) {
        commit('initCard', ckShop || {})
        commit('updateShopNumber')
        return
      }

      // 登录情况下直接同步到服务器
      if (ckShop) {
        await apis.mergeShopCarts({ ...ckShop })
        Cookies.remove('shopCard')
      }

      // 重新获取
      const shopCardList = await apis.getShopCarts()
      if (shopCardList) {
        commit('initCard', shopCardList)
        commit('updateShopNumber')
      }
    },
    /**
     * 从购物车中删除
     */
    async removeShopCard({ commit, state }, shopInfo) {
      if (state.userInfo.id) {
        const result = await apis.deleteShopCart([shopInfo.specId]).then(() => true).catch(() => false)

        if (!result) {
          return
        }
      }
      commit('deleteShopCard', shopInfo)
      commit('updateShopNumber')
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
