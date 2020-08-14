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
   * 商品详情
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  itemsInfo(params) {
    return super.get(`/api/items/info/${params.itemId}`, {})
  }
}

const apis = new Apis(axios)
export default apis
