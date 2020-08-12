<template>
  <div class="alipay-page">
    <PayHeader></PayHeader>
    <div class="alipay-page-main">
      <p>
        <img height="90" :src="LoadingImg">
        订单[<span>2008126SRN963X1P</span>]正在支付中，请耐心等待...
      </p>
    </div>
    <PayFooter/>
  </div>
</template>
<script>
import PayHeader from './components/PayHeader'
import PayFooter from './components/PayFooter'
import LoadingImg from '@/assets/images/loading.gif'

export default {
  name: 'Alipay',
  components: { PayHeader, PayFooter },
  data() {
    return {
      LoadingImg,
    }
  },
}
</script>
<style lang="stylus">
html,body{
  min-height 100%
  background: #efefef;
}
.alipay-page{
  overflow hidden
}
.alipay-page-main{
  background #fff
  width 1000px
  margin 40px auto 0 auto
  height 180px

  p{
    margin 0 230px
    padding 40px 0 10px 0
    border-bottom 1px solid #f3f3f3
    font-size 15px

    span{
      color #0ac265
      padding 0 2px
    }
  }
}
</style>
