<template>
  <div class="item-comment">
    <div class="comment-summary">
      <div class="rate">好评度
        <span class="num">
          <template v-if="allCommentLevel.totalCounts === 0">
            <strong>100</strong>%
          </template>
          <template v-if="allCommentLevel.totalCounts > 0">
            <strong>{{Math.round(allCommentLevel.goodCounts / allCommentLevel.totalCounts * 100)}}</strong>%
          </template>
        </span>
      </div>
      <ul class="cls">
        <li @click="levelHandle('')">全部评价（{{allCommentLevel.totalCounts}}）</li>
        <li @click="levelHandle('1')">好评（{{allCommentLevel.goodCounts}}）</li>
        <li @click="levelHandle('2')">中评（{{allCommentLevel.normalCounts}}）</li>
        <li @click="levelHandle('3')">差评（{{allCommentLevel.badCounts}}）</li>
      </ul>
    </div>
    <div class="comment-list">
      <ul>
        <li v-for="(item, key) in commentList" :key="key">
          <img :src="item.userFace" class="avatar">
          <div class="comment-main">
            <header class="comment-main-hd">
              <span class="user">{{item.nickname}} (匿名)</span>评论于&nbsp;<time>{{item.createdTime}}</time>
            </header>
            <div class="comment-main-bd">
              <p>{{item.content}}</p>
              <p class="spec-name">规格：{{item.sepcName}}</p>
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
  props: {
    // 商品id
    itemId: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      // 分页页数
      page: 1,
      // 分页每页显示数量
      pageSize: 10,
      // 总页数
      maxPage: 10,
      // 总记录数
      total: 0,
      // 分类级别信息
      allCommentLevel: {},
      // 评论类型
      levelType: '',
      // 评论列表
      commentList: [],
    }
  },
  created() {
    if (this.itemId) {
      this.getCommentLevel()
      this.getItemComment()
    }
  },
  methods: {
    /**
     * 查看类型下的评论
     */
    levelHandle(val) {
      this.levelType = val
      this.page = 1
      this.getItemComment()
    },
    /**
     * 获取商品评论类型数量
     */
    getCommentLevel() {
      this.$axios.itemsCommentLevel({ itemId: this.itemId }).then((data) => {
        this.allCommentLevel = data
      }).catch((error) => {
        console.log(error)
      })
    },
    /**
     * 获取最新评论
     */
    getItemComment() {
      this.$axios.itemsComments({
        itemId: this.itemId,
        level: this.levelType,
        page: this.page,
        pageSize: this.pageSize,
      }).then((data) => {
        this.commentList = data.rows
        this.total = data.total
        this.page = data.page
      }).catch((error) => {
        console.log(error)
      })
    },
    doPaging(page) {
      this.page = page
      this.getItemComment()
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
