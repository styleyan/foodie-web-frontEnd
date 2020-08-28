<template>
  <div class="global-sidebar">
    <div
     @mouseenter="enterInfoHandle"
     @mouseleave="leaveInfoHandle"
     class="user-info"
     :class="timer ? 'hover' : ''"
     >
      <i class="iconfont icon-user-center"></i>
    </div>
    <div @click="toShopCardHandle" class="user-shop-car">
      <i class="iconfont icon-shop-car"></i>
      <span class="text">购<br/>物<br/>车</span>
      <span class="num">{{shopNumber}}</span>
    </div>
    <dl
      @mouseenter="enterInfoHandle"
      @mouseleave="leaveInfoHandle"
      v-if="infoStatus" class="sidebar-user-info">
      <dt><img width="80" height="80" src="http://122.152.205.72:88/group1/M00/00/05/CpoxxFw_8_qAIlFXAAAcIhVPdSg994.png"/></dt>
      <dd>
        <p class="user-name">用户昵称: xiaofei.su</p>
        <p><a href="javascript:void(0)" @click="userLogout">退出登录</a></p>
      </dd>
    </dl>
    <div class="top-header"><i class="iconfont icon-to-top"></i></div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'GlobalSidebar',
  data() {
    return {
      infoStatus: false,
      timer: null,
    }
  },
  computed: {
    ...mapState([
      'shopNumber',
    ]),
  },
  methods: {
    ...mapActions([
      'userLogout',
    ]),
    toShopCardHandle() {
      this.$router.push({
        name: 'shopcart',
      })
    },
    enterInfoHandle() {
      clearTimeout(this.timer)
      this.infoStatus = true
    },
    leaveInfoHandle() {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.infoStatus = false
        this.timer = null
      }, 100)
    },
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
  text-align center

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
  .hover{
    background #ED145B
  }

  .user-info{
    position relative
  }

  .sidebar-user-info{
    position absolute
    left -262px
    top 80px
    width 260px
    height 150px
    background #fff
    box-shadow: 0 0 5px #00000066;

    dt,dd{
      float left
    }
    dt{
      margin 34px 10px 0 10px
    }
    dd{
      margin-top 50px
      line-height 22px
      font-size 14px
      color #333
    }
    .user-name{
      text-align left
      margin-bottom 6px
    }

    a{
      color #999
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
