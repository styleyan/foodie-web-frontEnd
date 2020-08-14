<template>
  <div class="index-banner" id="demo-slider-0">
    <ul v-show="showStatus" class="slides">
      <li v-for="(item, key) in banners" :key="key" :style="`background:${item.backgroundColor};`">
        <a :href="`/item?itemId=${item.id}`" target="_blank">
          <img :src="item.imageUrl">
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'IndexBanner',
  data() {
    return {
      banners: [],
      showStatus: false,
    }
  },
  mounted() {
    this.getBanner()
  },
  methods: {
    /**
     * 获取banner列表
     */
    getBanner() {
      this.$axios.indexCarousel().then((data) => {
        this.banners = data
        setTimeout(() => {
          this.showStatus = true
          this.startSliderHandle()
        }, 5)
      }).catch((err) => {
        console.log(err)
      })
    },
    /**
     * 开始轮播
     */
    startSliderHandle() {
      // 循环渲染轮播图
      window.$('#demo-slider-0').flexslider({
        animation: 'slide',
        slideshowSpeed: 4000,
        animationSpeed: 1000,
        slideshow: true,
        directionNav: true,
      })
    },
  },
}
</script>
<style lang="stylus">
.index-banner{
  width 100%
  height 432px
  text-align center
  position relative
  overflow hidden

  .slides{
    a{
      display block
      width 954px
      margin 0 auto

      img {
        margin-left 50px
      }
    }
  }

  .flex-control-nav{
    bottom: 10px;
  }
  .flex-control-paging {
    li{
      a {
        width 8px
        height 8px
      }
      .flex-active{
          background-color #0e90d2
      }
    }
  }
}
</style>
