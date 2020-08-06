<template>
  <div class="global-header">
    <div style="background-color:#f2f2f2; overflow:auto;border-bottom: 1px solid #e5e5e5;">
      <div class="header-top">
        <div class="header-top-l">
          <template v-show="!userIsLogin">
            <a href="#" class="h">亲，请登录</a>
            <a href="#">免费注册</a>
          </template>
          <span v-show="userIsLogin" style="color: #d2364c">欢迎，{{userInfo.username}}</span>
        </div>
        <div class="header-top-r">
          <a href="#">商城首页</a>
          <a href="#" @click="goUserCenter"><i class="iconfont icon-user-center"></i>个人中心</a>
        </div>
      </div>
    </div>
    <!--悬浮搜索框-->
    <div class="header-search">
      <img class="logo" :src="logoBig" />
      <div class="wrap-search">
        <input v-model="keywords" class="search-input" type="text" placeholder="请输入商品名" autocomplete="off">
        <button @click="doSearch" class="search-buttom" value="搜索">搜索</button>
      </div>
    </div>
  </div>
</template>
<script>
import logoBig from '@/assets/images/logobig.png'

export default {
  name: 'GlobalHeader',
  data() {
    return {
      keywords: '',
      logoBig,
      userIsLogin: false,
      userInfo: {},
    }
  },
  methods: {
    goUserCenter() {},
    doSearch() {},
  },
}
</script>
<style lang="stylus">
.global-header{
  overflow hidden
}
.header-top{
  overflow hidden
  width 1200px
  margin 6px auto
  font-size 12px
  color #999

  .header-top-l{
    float left
    a{
      margin-right 8px
      color #999

      &:hover{
        color #333
      }
    }
  }
  .header-top-r{
    float right
    .iconfont{
      vertical-align middle
    }
    a{
      margin-left 8px
      color #999
      &:hover{
        color #333
      }
    }
  }
}
.header-search{
  width 1000px;
  margin 20px auto
  .logo{
    margin-right 36px
  }
  .wrap-search{
    border: 2px solid #F03726;
    max-width: 670px;
    display inline-block
  }
  .search-input{
    width 524px
    height 46px
    padding-left: 5px;
    font-size: 12px;
    border: none;
    outline: none;
  }
  .search-buttom{
    float: right;
    width: 130px;
    height: 46px;
    color: #F5F5F2;
    background: #F03726 none repeat scroll 0% 0%;
    border-radius: 0px 0px;
    border: none;
    font-size 18px;
    text-align center
    outline: none;
    cursor: pointer;
  }
}
</style>
