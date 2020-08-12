<template>
  <div class="wxpay-page">
    <PayHeader></PayHeader>
    <div class="wxpay-page-main">
      <ul class="ul">
        <li><strong>商品订单:</strong>2008127NG2AY8000</li>
        <li class="line"><strong>支付金额:</strong><span class="money"><i>¥</i>0.01</span></li>
        <li><strong>支付方式:</strong><img :src="WxPayImg" alt="微信支付"/></li>
      </ul>
      <dl class="qr-code">
        <dt>
          <img width="200" height="200" :src="WxPayQrCode"/>
          <span class="qrcode-notice">请打开手机微信，扫一扫完成支付</span>
        </dt>
        <dd>
          <img :src="WxTipImg"/>
        </dd>
      </dl>
    </div>
    <PayFooter/>
  </div>
</template>
<script>
import PayHeader from './components/PayHeader'
import PayFooter from './components/PayFooter'
import WxPayImg from '@/assets/images/wxpay.png'
import WxTipImg from '@/assets/images/wxTip.jpg'
import WxPayQrCode from '@/assets/images/wxPayQrCode.png'

export default {
  name: 'Wxpay',
  components: { PayHeader, PayFooter },
  data() {
    return {
      WxPayImg,
      WxTipImg,
      WxPayQrCode,
    }
  },
  mounted() {
    setTimeout(() => {
      this.$router.push({
        name: 'paySuccess',
      })
    }, 5000)
  },
}
</script>
<style lang="stylus">
html,body{
  min-height 100%
  background: #efefef;
}
.wxpay-page-main{
  background #fff
  width 1000px
  margin 40px auto 0 auto
  box-sizing border-box
  padding 70px 250px
  font-size 14px

  .ul{
    li{
      margin-bottom 6px
    }
    strong{
      font-weight 700
      padding-right 18px
    }
    .money{
      color: #0ac265;
      font-weight: 400;
      font-size: 24px;

      i{
        font-size 18px
      }
    }
    .line{
      padding-bottom 16px
      border-bottom 1px solid #f3f3f3
      margin-bottom 38px
    }
  }
  .qr-code{
    margin-top 20px
    dt,dd{
      display inline-block
      vertical-align middle
      margin-right 20px
    }
    img{
      display block
    }
    .qrcode-notice{
      margin-top 6px
      display block
      background #00c800
      color #fff
      line-height 30px
      text-align center
      font-size 12px
    }
  }
}
</style>
