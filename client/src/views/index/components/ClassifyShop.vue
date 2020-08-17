<template>
  <div class="classify-shop">
    <div class="shop-title"><h4>{{item.name}}</h4><h3>{{item.slogan}}</h3></div>
    <ul v-if="classifyShop.simpleItemList.length" class="shop-container">
      <li class="first" :style="`background:${classifyShop.bgColor}`">
        <a class="first-images" href="#">
          <img :src="classifyShop.catImage"/>
        </a>
      </li>
      <li class="border-right">
        <div class="border-bottom">
          <a :href="`item/${classifyShop.simpleItemList[0].itemId}`">
            <img :src="classifyShop.simpleItemList[0].itemUrl" width="170" height="170"/>
          </a>
          <h3 class="title">{{classifyShop.simpleItemList[0].itemName}}</h3>
        </div>
        <div>
          <a :href="`item/${classifyShop.simpleItemList[1].itemId}`">
            <img :src="classifyShop.simpleItemList[1].itemUrl" width="170" height="170"/>
          </a>
          <h3 class="title">{{classifyShop.simpleItemList[1].itemName}}</h3>
        </div>
      </li>
      <li class="border-right">
        <div class="one-item">
          <h3 class="title">{{classifyShop.simpleItemList[2].itemName}}</h3>
          <a :href="`item/${classifyShop.simpleItemList[2].itemId}`">
            <img :src="classifyShop.simpleItemList[2].itemUrl" width="170" height="170"/>
          </a>
        </div>
      </li>
      <li class="border-right">
        <div class="border-bottom">
          <a :href="`item/${classifyShop.simpleItemList[3].itemId}`">
            <img :src="classifyShop.simpleItemList[3].itemUrl" width="170" height="170"/>
          </a>
          <h3 class="title">{{classifyShop.simpleItemList[3].itemName}}</h3>
        </div>
        <div>
          <a :href="`item/${classifyShop.simpleItemList[4].itemId}`">
            <img :src="classifyShop.simpleItemList[4].itemUrl" width="170" height="170"/>
          </a>
          <h3 class="title">{{classifyShop.simpleItemList[4].itemName}}</h3>
        </div>
      </li>
      <li>
        <div class="one-item">
          <h3 class="title">{{classifyShop.simpleItemList[5].itemName}}</h3>
          <a :href="`item/${classifyShop.simpleItemList[5].itemId}`">
            <img :src="classifyShop.simpleItemList[5].itemUrl" width="170" height="170"/>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ClassifyShop',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      classifyShop: {
        simpleItemList: [],
      },
    }
  },
  created() {
    this.getSixData()
  },
  methods: {
    /**
     * 获取每中分类6个商品数据
     */
    getSixData() {
      this.$axios.indexSixNewItems({ rootCatId: this.item.id }).then((data) => {
        this.classifyShop = data[0] || null
      }).catch((error) => {
        console.log(error)
      })
    },
  },
}
</script>
<style lang="stylus">
.classify-shop {
  width 1200px
  margin 20px auto 0 auto

  .shop-title{
    text-align: left;
    position: relative;
    border-bottom: 2px solid #000;
    margin-top: 10px;
    overflow hidden

    h4{
      float: left;
      border: none;
      margin: 7px 0px;
      font-size: 20px;
      font-weight: 700;
    }
    h3{
      display: block;
      font-size: 14px;
      color: #999;
      float: left;
      margin-left: 10px;
      margin-top: 12px;
    }
  }
  .shop-container{
    height 480px
    text-align center
    li{
      width 20%
      height 100%
      overflow hidden
      float left
      position relative
    }
    div{
      padding-top 16px
    }
    .border-right{
      border-right 1px solid #eee
    }
    .border-bottom{
      border-bottom 1px solid #eee
    }
    .first-images{
      position: absolute;
      top: auto;
      margin: 0px 0px;
      bottom: 10px;
      right: 50%;
      width: 210px;
      margin-right: -105px;
    }
    .title{
      padding: 0px 14px 16px 14px;
      height 60px
      font-size 15px
    }
    .one-item{
      margin-top 112px
    }
  }
}
</style>
