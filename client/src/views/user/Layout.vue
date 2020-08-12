<template>
  <div class="user-index">
    <GlobalMenu :isHideClassify="true" :menus="[]" redText="用户中心"></GlobalMenu>
    <div class="user-mian">
      <aside class="user-left-menu">
        <h3>个人中心</h3>
        <dl>
          <dt>个人资料</dt>
          <dd><a href="#">我的信息</a></dd>
          <dd><a href="#">收货地址</a></dd>
        </dl>
        <dl>
          <dt>我的交易</dt>
          <dd><a href="#">订单管理</a></dd>
          <dd><a href="#">我的评价</a></dd>
        </dl>
      </aside>
      <div class="user-right-content">
        <router-view></router-view>
      </div>
    </div>
    <GlobalFooter></GlobalFooter>
  </div>
</template>
<script>
import GlobalMenu from '@/components/GlobalMenu.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'

export default {
  name: 'UserIndex',
  components: { GlobalMenu, GlobalFooter },
  data() {
    return {

    }
  },
}
</script>
<style lang="stylus">
html,body{
  min-height 100%
  background: #efefef;
}
.user-index{
}
.user-mian{
  width 1200px
  margin 20px auto 30px auto
  overflow hidden
}

.user-left-menu{
  width 178px
  float left
  padding: 0px 8px;
  font-size: 14px;
  background: #fff;
  border-top: 5px solid #FEC4D7;
  text-align center
  h3{
    margin-bottom 12px
    border-bottom: 1px solid #F5F8FA;
    padding-bottom: 10px;
    padding-top: 10px;
    font-weight 700
  }

  dl{
    padding-bottom 8px
    margin-bottom 12px
    border-bottom: 1px solid #F5F8FA;
  }
  dt{
    margin-bottom 6px
  }
  dd{
    padding 3px 0
  }
  a{
    font-size 13px
    color #666

    &:hover{
      color #333
    }
  }
}

.user-right-content{
  overflow auto
  float right
  width 1010px
}
</style>
