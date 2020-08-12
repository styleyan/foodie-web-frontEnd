<template>
  <div class="pay-success-page">
    <PayHeader></PayHeader>
    <div class="pay-success-page-main">
      <dl class="pay-success-info">
        <dt><i class="iconfont icon-success"></i>支付成功</dt>
        <dd>商品订单：2008127NG2AY8000</dd>
        <dd>支付金额：¥0.01</dd>
        <dd class="gray-words">若有疑问请与客服联系，我们将会尽快为您提供帮助与服务。</dd>
        <dd class="gray-words">客服邮箱：kf@isyxf.com</dd>
      </dl>
      <a class="btn-look" href="/user/order">查看我的订单</a>
    </div>
    <PayFooter/>
  </div>
</template>
<script>
import PayHeader from './components/PayHeader'
import PayFooter from './components/PayFooter'

export default {
  name: 'PaySuccess',
  components: { PayHeader, PayFooter },
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
.pay-success-page{
  overflow hidden
}
.pay-success-page-main{
  background #fff
  width 1000px
  margin 40px auto 0 auto
  overflow hidden
  .btn-look{
    display block
    width 150px
    margin 30px 0 100px 100px
    line-height 50px
    text-align center
    font-size 15px
    color #fff
    background #5991d8

    &:hover{
      background #4c80c1
    }
  }
}
.pay-success-info{
  font-size 14px
  color #333
  dt{
    padding: 45px 0 45px 100px;
    margin-bottom 40px
    background-color: #f5fef2;
    font-size 16px
    font-weight 700
  }
  dd{
    padding 0 0 16px 100px
  }
  .icon-success{
    color #58e013
    font-size 18px
    margin-right 4px
  }
  .gray-words{
    color: #888a87;
  }
}
</style>
