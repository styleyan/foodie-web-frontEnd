<template>
  <div class="pay-method">
    <h3>选择支付方式</h3>
    <ul>
      <li class="active"><img :src="AlipayImg"/><i class="iconfont icon-right-check"></i></li>
      <li><img :src="WxpayImg"/></li>
    </ul>
  </div>
</template>
<script>
import AlipayImg from './alipay.png'
import WxpayImg from './wxpay.png'

export default {
  name: 'PayMethod',
  data() {
    return {
      WxpayImg,
      AlipayImg,
    }
  },
}
</script>
<style lang="stylus">
.pay-method{
  text-align left
  margin-top 10px
  h3{
    font-size 14px
    font-weight 700
  }
  ul{
    overflow hidden
    margin-top 10px
  }
  li{
    position relative
    width 180px
    padding 6px
    float left
    margin-right 30px
    border 1px solid #fff
  }
  .iconfont{
    display none
    position absolute
    right 0
    bottom -1px
    color red
  }
  .active{
    border 1px solid red
    .iconfont{
      display block
    }
  }
}
</style>
