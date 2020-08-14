<template>
  <div class="index-banner" id="demo-slider-0">
    <ul class="slides">
      <li style="background:rgb(244 70 97);">
        <a href="#" target="_blank"><img src="http://122.152.205.72:88/group1/M00/00/05/CpoxxF0ZmG-ALsPRAAEX2Gk9FUg848.png"></a>
      </li>
      <li style="background:#fd9808;">
        <a href="#" target="_blank"><img src="http://122.152.205.72:88/group1/M00/00/05/CpoxxF0ZmHuAPlXvAAFe-H5_-Nw961.png"></a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'IndexBanner',
  mounted() {
    // 循环渲染轮播图
    window.$('#demo-slider-0').flexslider({
      animation: 'slide',
      slideshowSpeed: 4000,
      animationSpeed: 1000,
      slideshow: true,
      directionNav: true,
    })
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
