<template>
  <div class="global-sidebar">
    <div class="user-info">
      <i class="iconfont icon-user-center"></i>
    </div>
    <div class="user-shop-car">
      <i class="iconfont icon-shop-car"></i>
      <span class="text">购<br/>物<br/>车</span>
      <span class="num">1</span>
    </div>
    <div class="top-header"><i class="iconfont icon-to-top"></i></div>
  </div>
</template>
<script>
export default {
  name: 'GlobalSidebar',
  data() {
    return {

    }
  },
}
</script>
<style lang="stylus">
.global-sidebar{
  padding-top: 120px;
  width: 35px;
  position: fixed;
  right: 0;
  top:0
  background-color: #2b2b2b;
  min-height: 100%;
  z-index: 100;
  color: #FFF;

  .user-info,.user-shop-car{
    cursor pointer
    display block
    padding 6px 0
    .iconfont{
      font-size 26px
    }

    &:hover{
      background #ED145B
    }
  }

  .user-shop-car{
    margin-top 8px

    .iconfont{
      font-size 22px
    }
    .text{
      font-size 14px
    }
    span{
      display block
    }
    .num{
      margin 8px auto 0 auto
      width 21px
      height 21px
      text-align center
      line-height 21px
      border-radius 50%
      background #ED145B
    }

    &:hover{
      background #ED145B
      .num{
        background #fff
        color #ED145B
      }
    }
  }

  .top-header{
    position absolute
    bottom 0
    left 0
    width 35px
    padding 8px 0
    .iconfont{
      font-size 22px
    }
    cursor pointer
    &:hover{
      background #ED145B
    }
  }
}
</style>
