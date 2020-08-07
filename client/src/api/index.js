import axios from 'axios'
import Ajax from './install'
import './axios.config'

/**
 * 发送ajax请求列表
 */
class Apis extends Ajax {
  /**
   * 文章列表
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  articleSearchList(params) {
    return super.get('/api/article/search', params)
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
