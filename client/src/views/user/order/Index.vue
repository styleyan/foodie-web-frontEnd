<template>
  <div class="user-info-order">
    <UserTopBar text="订单管理"></UserTopBar>
    <GlobalTabs :tabs="tabs"></GlobalTabs>
    <OrderTable></OrderTable>
    <GlobalZpageNav v-bind:page="page" v-bind:page-size="pageSize" v-bind:total="total"
      v-bind:max-page="maxPage"  v-on:pagehandler="doPaging">
    </GlobalZpageNav>
  </div>
</template>
<script>
import UserTopBar from '../components/UserTopBar'
import GlobalTabs from '@/components/GlobalTabs'
import OrderTable from './components/OrderTable'
import GlobalZpageNav from '@/components/GlobalZpageNav.vue'

export default {
  name: 'UserOrder',
  components: { UserTopBar, GlobalTabs, OrderTable, GlobalZpageNav },
  data() {
    return {
      tabs: [
        { name: '所有订单', key: 'tab1' },
        { name: '待付款', key: 'tab2' },
        { name: '待发货', key: 'tab3' },
        { name: '待收货', key: 'tab4' },
        { name: '已完成', key: 'tab5' },
      ],
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
.user-info-order{
  background #fff
  padding-bottom 20px

  .global-zpage-nav{
    text-align center
  }
}
</style>
