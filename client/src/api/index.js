import axios from 'axios'
import Ajax from './install'
import './axios.config'

/**
 * 发送ajax请求列表
 */
class Apis extends Ajax {
  /**
   * 获取首页banner
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  indexCarousel(params) {
    return super.get('/api/index/carousel', params)
  }

  /**
   * 获取全部分类
   * @param {*} params
   */
  indexCats(params) {
    return super.get('/api/index/cats', params)
  }

  /**
   * 查看分类详情
   * @param {*} params
   */
  indexCatsSubCat(params) {
    return super.get(`/api/index/subCat/${params.rootCatId}`)
  }

  /**
   * 查询每个一级分类下的最新6条商品数据
   * @return
   */
  indexSixNewItems(params) {
    return super.get(`/api/index/sixNewItems/${params.rootCatId}`)
  }

  /**
   * 商品详情
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  itemsInfo(params) {
    return super.get(`/api/items/info/${params.itemId}`, {})
  }

  /**
   * 商品好评数量
   */
  itemsCommentLevel(params) {
    return super.get('/api/items/commentLevel', params)
  }

  /**
   * 评论列表
   */
  itemsComments(params) {
    return super.get('/api/items/comments', params)
  }

  /**
   * 注册账号
   */
  userRegister(params) {
    return super.post('/api/user/register', params)
  }

  /**
   * 登录账号
   */
  userLogin(params) {
    return super.post('/api/user/login', params)
  }

  /**
   * 获取用户信息
   */
  getUserInfo() {
    return super.get('/api/user/info');
  }

  /**
   * 添加购物车
   */
  shopCartAdd(params) {
    return super.post('/api/shopcart/add', params)
  }

  /**
   * 获取购物车数据
   */
  getShopCarts(params) {
    return super.get('/api/shopcart/query', params)
  }

  /**
   * 合并购物车数据
   */
  mergeShopCarts(params) {
    return super.post('/api/shopcart/merge', params)
  }
}

const apis = new Apis(axios)
export default apis
