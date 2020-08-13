<template>
  <div class="user-do-comment">
    <UserTopBar text="发表评论"></UserTopBar>
    <div class="wrap-content">
      <div class="shop-info">
        <img width="148" height="148" src="http://122.152.205.72:88/foodie/bingan-1005/img1.png"/>
        <strong class="ellipsis">【天天吃货】夹心吐司面</strong>
        <span>规格：巧克力</span>
      </div>
      <div class="comment">
        <ul :class="`active${commentType}`">
          <li><span @click="commentHandle(1)"><i class="iconfont icon-comment-1"></i>好评</span></li>
          <li><span @click="commentHandle(2)"><i class="iconfont icon-comment-2"></i>中评</span></li>
          <li><span @click="commentHandle(3)"><i class="iconfont icon-comment-3"></i>差评</span></li>
        </ul>
        <textarea></textarea>
      </div>
    </div>
    <a class="btn-commit" href="javascript:void(0)">发表评论</a>
  </div>
</template>
<script>
import UserTopBar from '../components/UserTopBar'

export default {
  name: 'UserDoComment',
  components: { UserTopBar },
  data() {
    return {
      commentType: '',
    }
  },
  methods: {
    commentHandle(type) {
      this.commentType = type
    },
  },
}
</script>
<style lang="stylus">
.user-do-comment{
  background #fff
  padding-bottom 50px
  .wrap-content{
    overflow hidden
    margin 16px 18px 0 18px
  }
  .shop-info{
    width 154px
    float left
    margin-right 30px
    img{
      display block
    }
    strong{
      margin 6px 0 4px 0
      display block
      width 100%
      font-size 14px
    }
    span{
      color gray
      padding-left 8px
    }
  }
  .comment{
    ul{
      overflow hidden
      font-size 14px
    }
    .active1{
      .icon-comment-1{
        color #d2364c
      }
    }
    .active2{
      .icon-comment-2{
        color #f3c808
      }
    }
    .active3{
      .icon-comment-3{
        color #aab7b7
      }
    }
    li{
      float left
      width 196px
      text-align center
      padding 10px 0

      span{
        cursor pointer
      }
    }
    .iconfont{
      font-size 18px
      vertical-align middle
      margin-right 2px
    }
    textarea{
      border 1px solid #F5F8FA
      width 600px
      height 120px
      padding 6px
      line-height 20px
    }
  }
  .btn-commit{
    display block
    width 86px
    margin 0 auto
    padding: 0.5em 1em;
    text-align center
    color: #fff;
    background-color: #dd514c;
    border-color: #dd514c;
  }
}
</style>
