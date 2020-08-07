<template>
  <div class="item-detail">
    <h3 class="params-hd">产品参数:</h3>
    <ul class="item-params">
      <li title="">产地:&nbsp;{{itemParams.producPlace}}</li>
      <li title="">品牌名:&nbsp;{{itemParams.brand}}</li>
      <li title="">生产厂名:&nbsp;{{itemParams.factoryName}}</li>
      <li title="">生产厂址:&nbsp;{{itemParams.factoryAddress}}</li>
      <li title="">包装方式:&nbsp;{{itemParams.packagingMethod}}</li>
      <li title="">保质期:&nbsp;{{itemParams.footPeriod}}</li>
      <li title="">规格重量:&nbsp;{{itemParams.weight}}</li>
      <li title="">储存方法:&nbsp;{{itemParams.storageMethod}}</li>
      <li title="">食用方式:&nbsp;{{itemParams.eatMethod}}</li>
    </ul>
    <h3 class="params-hd">商品细节:</h3>
    <div class="item-content" v-html="content"></div>
  </div>
</template>
<script>
export default {
  name: 'ItemDetail',
  data() {
    return {
      itemParams: {},
      content: '<p>超级好吃、非常好吃</p><img src="http://122.152.205.72:88/foodie/snacks-1005/img1.png"><img src="http://122.152.205.72:88/foodie/snacks-1005/img2.png">',
    }
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
