<template>
  <div class="item-page">
    <GlobalHeader></GlobalHeader>
    <GlobalMenu :isHideClassify="true" redText="商品详情"></GlobalMenu>
    <div class="item-content">
      <GlobalZoomImg :itemImgList="itemInfo.itemImgList"></GlobalZoomImg>
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

export default {
  name: 'Item',
  components: { GlobalHeader, GlobalMenu, GlobalFooter, GlobalSidebar, GlobalZoomImg },
  data() {
    return {
      itemInfo: {},
    }
  },
  created() {
    this.getData()
  },
  methods: {
    /**
     * 获取数据
     */
    getData() {
      this.$axios.itemsInfo({ itemId: 'cake-1001' }).then((data) => {
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
}
</style>
