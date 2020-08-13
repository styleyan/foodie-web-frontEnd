<template>
  <div class="user-comment">
    <UserTopBar text="评价管理"></UserTopBar>
    <div class="user-comment-list">
      <div class="hd">
        <span>评价</span>
        <span>商品</span>
      </div>
      <ul class="bd">
        <li v-for="item in [2,3]" :key="item">
          <div class="shop-img">
            <img class="img" src="http://122.152.205.72:88/foodie/bingan-1005/img1.png" width="78" height="78"/>
            <span class="comment">fffff</span>
            <time class="time">2020年08月13日 5:38:23</time>
          </div>
          <div class="shop-info">
            <a class="name" href="#">【天天吃货】夹心吐司面包 早餐面包 早点早饭</a>
            <span class="type">规格：巧克力</span>
          </div>
        </li>
      </ul>
    </div>
    <GlobalZpageNav v-bind:page="page" v-bind:page-size="pageSize" v-bind:total="total"
      v-bind:max-page="maxPage"  v-on:pagehandler="doPaging">
    </GlobalZpageNav>
  </div>
</template>
<script>
import UserTopBar from '../components/UserTopBar'
import GlobalZpageNav from '@/components/GlobalZpageNav.vue'

export default {
  name: 'UserComment',
  components: { UserTopBar, GlobalZpageNav },
  data() {
    return {
      // 分页页数
      page: 1,
      // 分页每页显示数量
      pageSize: 10,
      // 总页数
      maxPage: 10,
      // 总记录数
      total: 100,
    }
  },
  methods: {
    /**
     * 分页实现方法 跳转到page页
     */
    doPaging(page) {
      this.page = page
    },
  },
}
</script>
<style lang="stylus">
.user-comment{
  padding-bottom 20px
  background #fff
  .global-zpage-nav{
    text-align center
  }
}
.user-comment-list{
  .hd{
    width 100%
    overflow hidden
    margin 10px 0 30px 0
    font-size 14px
    span{
      float left
      width 50%
      text-align center
    }
  }
  .bd{
    padding 0 18px
    li{
      overflow hidden
      border-bottom 1px dashed #e2e2e2
      margin-bottom 18px
    }
    .shop-img,.shop-info{
      float left
      width 50%
    }
    .shop-img{
      position relative
      min-height 86px
      .img{
        position absolute
      }
      .comment{
        display block
        padding 0 10px 30px 96px
        line-height 18px
      }
      .time{
        position absolute
        bottom 10px
        left 96px
        color #9C9C9C
      }
    }
    .shop-info{
      text-align center
      font-size 14px
      .name{
        display block
        margin 14px 0 6px 0
        color #005EA7
      }
      .type{
        color #9C9C9C
      }
    }
  }
}
</style>
