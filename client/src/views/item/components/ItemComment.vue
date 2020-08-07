<template>
  <div class="item-comment">
    <div class="comment-summary">
      <div class="rate">好评度<span class="num"><strong>10</strong>%</span></div>
      <ul class="cls">
        <li>全部评价（1）</li>
        <li>好评（1）</li>
        <li>中评（1）</li>
        <li>差评（1）</li>
      </ul>
    </div>
    <div class="comment-list">
      <ul>
        <li v-for="(item,key) in [2,3,4,5,6]" :key="key">
          <img src="http://api.z.mukewang.com:8088/foodie-dev-api/foodie/faces/1908017YR51G1XWH/face-1908017YR51G1XWH.jpg?t=20200804162134" class="avatar">
          <div class="comment-main">
            <header class="comment-main-hd">
              <span class="user">d*****o (匿名)</span>评论于&nbsp;<time datetime="">2019年07月29日 3:20:34</time>
            </header>
            <div class="comment-main-bd">
              <p>的地位</p>
              <p class="spec-name">规格：草莓味</p>
            </div>
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
import GlobalZpageNav from '@/components/GlobalZpageNav'

export default {
  name: 'ItemComment',
  components: { GlobalZpageNav },
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
    doPaging(page) {
      this.page = page
    },
  },
}
</script>
<style lang="stylus">
.item-comment{
  .comment-summary{
    overflow hidden
    .rate{
      padding-top 30px
      float left
      margin-right 30px
      strong{
        font-size 46px
      }
    }
    .num{
      display block
      margin-top 4px
      color #e4393c
    }
    .cls{
      overflow hidden
      float left
      border: 1px solid #F5F5F5;
      background-color: #FAFAFA;
      width: 500px;
      height: 32px;
      padding: 5px 40px;
      font-size 16px
      margin-top: 60px;
      li{
        display inline-block
        margin-right 20px
      }
    }
  }

  .comment-list{
    margin-top 40px
    text-align left
    li{
      position relative
      padding-left 60px
      margin-bottom 30px
    }
    .avatar{
      border-radius: 50%;
      width: 48px;
      height: 48px;
      position absolute
      left 0
      top 0
    }
    .comment-main{
      border: 1px solid #dedede;
      position relative
      &:after{
        position: absolute;
        top: 10px;
        left: -8px;
        right: 100%;
        width: 0;
        height: 0;
        display: block;
        content: " ";
        border-color: transparent;
        border-style: solid solid outset;
        border-width: 8px 8px 8px 0;
        pointer-events: none;
      }
    }
    .comment-main-hd{
      padding: 10px 15px;
      font-size: 13px;
      color: #999;
      line-height: 1.2;
      background: #f8f8f8;
      border-bottom: 1px solid #eee;

      .user{
        font-weight 700
        margin-right 4px
      }
    }
    .comment-main-bd{
      font-size 14px
      padding 15px

      .spec-name{
        margin-top 8px
        font-size 12px
        color gray
      }
    }
  }
}
</style>
