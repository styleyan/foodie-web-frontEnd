<template>
  <div class="search-page">
    <GlobalHeader></GlobalHeader>
    <GlobalMenu :isHideClassify="true" redText="搜索页面"></GlobalMenu>
    <div class="search-content">
      <ul class="sort-select">
        <li @click="activeHandle('default')" :class="activeSort === 'default' ? 'active' : ''"><a title="默认" href="javascript:void(0);">默认排序</a></li>
        <li @click="activeHandle('sales')" :class="activeSort === 'sales' ? 'active' : ''"><a title="销量" href="javascript:void(0);">销量排序</a></li>
        <li @click="activeHandle('price')" :class="activeSort === 'price' ? 'active' : ''"><a title="价格" href="javascript:void(0);">价格优先</a></li>
      </ul>
      <ul class="sort-list-content">
        <li v-for="(item, key) in [1,3,4,5,6,7,8,9]" :key="key">
          <div class="limit" @click="toItemPage">
            <img src="http://122.152.205.72:88/foodie/cake-42/img1.png" width="220" height="220">
            <p class="title">好吃蛋糕甜点脱水蛋糕</p>
            <p class="price"><b>¥</b> <strong>60.8</strong></p>
            <p class="number">销量<span>2328</span></p>
          </div>
        </li>
      </ul>
      <div class="wrap">
        <GlobalZpageNav v-bind:page="page" v-bind:page-size="pageSize" v-bind:total="total"
          v-bind:max-page="maxPage"  v-on:pagehandler="doPaging">
        </GlobalZpageNav>
      </div>
    </div>
    <GlobalFooter></GlobalFooter>
    <GlobalSidebar></GlobalSidebar>
  </div>
</template>
<script>
import GlobalHeader from '@/components/GlobalHeader.vue'
import GlobalMenu from '@/components/GlobalMenu.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'
import GlobalSidebar from '@/components/GlobalSidebar.vue'
import GlobalZpageNav from '@/components/GlobalZpageNav.vue'

export default {
  name: 'Search',
  components: { GlobalHeader, GlobalMenu, GlobalFooter, GlobalSidebar, GlobalZpageNav },
  data() {
    return {
      activeSort: 'default',
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
     * 选中触发事件
     */
    activeHandle(val) {
      this.activeSort = val
    },
    /**
     * 分页实现方法 跳转到page页
     */
    doPaging(page) {
      this.page = page
      // this.searchInBackend(this.keywords, this.sort, page, this.pageSize);
    },
    /**
     * 前往详情页
     */
    toItemPage() {
      this.$router.push({
        name: 'item',
      })
    },
  },
}
</script>
<style lang="stylus">
.search-page{
  .search-content{
    width 1200px
    margin 0 auto
  }
  // 选择
  .sort-select{
    overflow hidden
    padding: 0px 0px;
    border-radius: 0px 0px 4px 4px;
    margin: 10px 0;
    font-size: 12px;
    width: auto;
    overflow: hidden;
    box-shadow: 0px 0px 2px #999;
    background: #fff;

    li{
      text-align: center;
      float: left;
      display: inline;
      height: 35px;
      line-height: 35px;
      padding: 0px 20px;
      width: auto;
      border-right: 1px dotted #ddd;
    }
    .active{
      background: #F5F5F5;
      color: #000;
    }
  }

  // 搜索列表
  .sort-list-content{
    overflow hidden
    li{
      width 20%;
      box-sizing border-box
      float left
    }
    .limit{
      overflow: hidden;
      position: relative;
      cursor: pointer;
      padding: 0px;
      margin: 10px;
      border: 1px #e8e8e8 solid;
      background: #fff;
    }
    .title{
      padding: 0px 10px;
      overflow: hidden;
      height: 36px;
      line-height: 18px;
      margin: 5px 0px;
      font-size: 14px;
    }
    .price{
      color: #e4393c;
      font-weight: 600;
      padding: 5px 0 10px 10px;
      font-size: 16px;
      text-align left
    }
    .number{
      position: absolute;
      bottom: 10px;
      right: 10px;
      font-size: 14px;
    }
  }
}
</style>
