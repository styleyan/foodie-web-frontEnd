<template>
  <div class="item-detail">
    <h3 class="params-hd">产品参数:</h3>
    <ul class="item-params">
      <li title="">产地:&nbsp;{{itemParam.producPlace}}</li>
      <li title="">品牌名:&nbsp;{{itemParam.brand}}</li>
      <li title="">生产厂名:&nbsp;{{itemParam.factoryName}}</li>
      <li title="">生产厂址:&nbsp;{{itemParam.factoryAddress}}</li>
      <li title="">包装方式:&nbsp;{{itemParam.packagingMethod}}</li>
      <li title="">保质期:&nbsp;{{itemParam.footPeriod}}</li>
      <li title="">规格重量:&nbsp;{{itemParam.weight}}</li>
      <li title="">储存方法:&nbsp;{{itemParam.storageMethod}}</li>
      <li title="">食用方式:&nbsp;{{itemParam.eatMethod}}</li>
    </ul>
    <h3 class="params-hd">商品细节:</h3>
    <div class="item-content" v-html="item.content"></div>
  </div>
</template>
<script>
export default {
  name: 'ItemDetail',
  props: {
    itemParam: {
      type: Object,
      default: () => ({}),
    },
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {}
  },
}
</script>
<style lang="stylus">
.item-detail{
  .params-hd{
    border-left 2px solid #F03726
    text-align left
    font-size 16px
    font-weight 800
    padding-left 10px
    margin 20px 0 12px 0
  }
  .item-params{
    overflow hidden
    margin-bottom 40px
    text-align left
    font-size 14px
    li{
      width 30%
      float left
      line-height 20px
      margin-bottom 6px
    }
  }
  .item-content{
    text-align left
    p {
      margin-bottom 6px
      font-size 13px
    }
    img{
      margin-bottom 6px
    }
  }
}
</style>
