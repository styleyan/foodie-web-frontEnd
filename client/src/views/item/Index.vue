<template>
  <div class="item-page">
    <GlobalHeader></GlobalHeader>
    <GlobalMenu :isHideClassify="true" redText="商品详情"></GlobalMenu>
    <div class="item-content">
      <GlobalBreadcrumb :list="[{ href: '/', text: '首页' }, { href: '#', text: '分类' }, { href: '', text: '商品' }]"></GlobalBreadcrumb>
      <div style="overflow: auto">
        <GlobalZoomImg style="float:left;margin-right:30px" :itemImgList="itemInfo.itemImgList"></GlobalZoomImg>
        <ItemAddCart :itemImages="itemInfo.itemImgList" :item="itemInfo.item" :itemSpecList="itemInfo.itemSpecList"></ItemAddCart>
      </div>
      <div class="item-detail-box">
        <ul class="item-detail-box-tab">
          <li :class="detailActive === 0 ? 'active':''" @click="detailTabHandle(0)">宝贝详情</li>
          <li :class="detailActive === 1 ? 'active':''" @click="detailTabHandle(1)">全部评价</li>
        </ul>
        <ItemDetail :itemParam="itemInfo.itemParam" :item="itemInfo.item" v-if="detailActive === 0"></ItemDetail>
        <ItemComment :itemId="itemId" v-else></ItemComment>
      </div>
    </div>
    <GlobalFooter></GlobalFooter>
    <GlobalSidebar></GlobalSidebar>
  </div>
</template>
<script>
import GlobalHeader from '@/components/GlobalHeader.vue'
import GlobalMenu from '@/components/GlobalMenu.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'
import GlobalSidebar from '@/components/GlobalSidebar.vue'
import GlobalZoomImg from '@/components/GlobalZoomImg'
import GlobalBreadcrumb from '@/components/GlobalBreadcrumb'
import ItemAddCart from './components/ItemAddCart'
import ItemDetail from './components/ItemDetail'
import ItemComment from './components/ItemComment'

export default {
  name: 'Item',
  components: { GlobalHeader, GlobalMenu, GlobalFooter, GlobalSidebar, GlobalZoomImg, GlobalBreadcrumb, ItemAddCart, ItemDetail, ItemComment },
  data() {
    return {
      itemInfo: {},
      detailActive: 0,
      itemId: '',
    }
  },
  created() {
    this.itemId = this.$route.params.itemId
    this.getData()
  },
  methods: {
    detailTabHandle(index) {
      this.detailActive = index
    },
    /**
     * 获取数据
     */
    getData() {
      this.$axios.itemsInfo({ itemId: this.itemId }).then((data) => {
        const itemImgList = data.itemImgList
        // 循环图片，把头图放在第一张
        for (let i = 0; i < itemImgList.length; i++) {
          const tempImg = itemImgList[i]
          const isMain = tempImg.isMain
          if (isMain === 1) {
            // 删除主图在数组中的位置
            itemImgList.splice(i, 1)
            // 把主图插入到第一个元素
            itemImgList.unshift(tempImg)
            break
          }
        }
        this.itemInfo = data
      }).catch((err) => {
        console.log(err)
      })
    },
  },
}
</script>
<style lang="stylus">
.item-page{
  .item-content{
    width 1200px
    margin 0 auto
  }
  .item-detail-box{
    margin-top 40px
  }
  .item-detail-box-tab{
    background: #F5F5F5;
    line-height 36px
    overflow hidden

    li{
      border-top 2px solid #F5F5F5
      float left
      width 216px
      text-align center
      font-size 18px
      font-weight 800px
      cursor default
    }
    .active{
      border-top-color #F03726
    }
  }
}
</style>
