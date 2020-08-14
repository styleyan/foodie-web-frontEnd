<template>
<nav class="global-zpage-nav">
  <ul class="page-ul">
    <li v-bind:key="index" v-for="(item,index) in pageList" v-bind:class ="item.class" @click.stop="setPage(item)" v-html="item.html"></li>
  </ul>
  <span class="total">共 {{total}} 条</span>
</nav>
</template>
<script>
export default {
  name: 'GlobalZpageNav',
  props: {
    prevHtml: String,
    nextHtml: String,
    page: Number,
    total: Number,
    pageSize: Number,
    maxPage: Number,
  },
  computed: {
    pageList: function () {
      var _this = this
      var pageList = []
      let pageCount = Math.ceil(_this.total / _this.pageSize)
      let page = _this.page
      let prevHtml = _this.prevHtml ? _this.prevHtml : '&lt;'
      let nextHtml = _this.nextHtml ? _this.nextHtml : '&gt;'
      let maxPage = _this.maxPage ? _this.maxPage : 9

      let hasPrev = page > 1
      let hasNext = page < pageCount

      // 上一页
      pageList.push({
        class: hasPrev ? '' : 'disabled',
        page: hasPrev ? page - 1 : page,
        html: prevHtml,
      })

      // 首页
      pageList.push({
        class: page === 1 ? 'active' : '',
        page: 1,
        html: 1,
      })

      let p0 = Math.floor(maxPage / 2)
      let p1 = 1 + 2 + p0 // 首页+省略至少2个页码+中间页面数的一半

      let start, end
      if (page >= p1) {
        start = page - p0
        // 前置省略号
        pageList.push({
          class: 'dot',
          page: page,
          html: '...',
        })
      } else {
        start = 2
      }

      let p2 = page + p0
      if (p2 < pageCount) {
        end = p2
      } else {
        end = pageCount - 1
      }

      // 页码列表
      for (let i = start; i <= end; i++) {
        pageList.push({
          class: page === i ? 'active' : '',
          page: i,
          html: i,
        })
      }

      if (end < pageCount - 1) {
        // 后置省略号
        pageList.push({
          class: 'dot',
          page: page,
          html: '...',
        })
      }

      // 尾页
      if (pageCount > 1) {
        pageList.push({
          class: page === pageCount ? 'active' : '',
          page: pageCount,
          html: pageCount,
        })
      }

      // 下一页
      pageList.push({
        class: hasNext ? '' : 'disabled',
        page: hasNext ? page + 1 : page,
        html: nextHtml,
      })

      return pageList
    },
  },
  methods: {
    /**
     * 设置翻页
     */
    setPage: function (item) {
      if (item.class === '') {
        this.$emit('pagehandler', item.page)
      }
    },
  },
}
</script>
<style lang="stylus">
.global-zpage-nav{
  ul {
    display: inline-block;
    margin: 20px 20px;
    padding: 0;

    li {
      display: inline-block;
      margin: 0;
      padding: 0 4px;
      border: 1px solid #d1dbe5;
      border-right: 0;
      background: #fff;
      font-size: 13px;
      min-width: 28px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;

      &:last-child {
        border-right: 1px solid #d1dbe5;
      }
      &:hover {
        color: #20a0ff;
      }
    }
    .active {
      border-color: #20a0ff;
      background-color: #20a0ff;
      color: #fff;
      cursor: default;

      &:hover {
        color: #fff;
      }
    }
    .disabled {
      cursor: not-allowed;
      color: #e4e4e4;
    }

    .dot {
      cursor: default;
    }
  }
}
</style>
