import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    // 用户信息
    userInfo: {},
  },
  mutations: {
    /**
     * 更新用户信息
     */
    updateUser(state, userInfo) {
      state.userInfo = userInfo
    },
  },
  actions: {

  },
})
