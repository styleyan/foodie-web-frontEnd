<template>
  <div class="pay-header">
    <div class="pay-header-main">
      <div class="pay-header-left">
        <a href="/"><img height="60" :src="logoBig"/></a>
        <h3>订单支付</h3>
      </div>
      <div class="pay-header-right">
        账号: xiaofei.su
      </div>
    </div>
  </div>
</template>
<script>
import logoBig from '@/assets/images/logobig.png'

export default {
  name: 'PayHeader',
  data() {
    return {
      logoBig,
    }
  },
}
</script>
<style lang="stylus">
.pay-header{
  height: 60px;
  overflow height
  background-color: #fff;

  .pay-header-main{
    width 1000px
    margin 0 auto
  }
  .pay-header-left{
    float left

    h3{
      line-height 30px
      margin 5px 0 0 20px
      border-left 1px solid #f0f0f0
      display inline-block
      vertical-align middle
      padding-left 20px
      font-size 16px
      font-weight 700
    }
  }
  .pay-header-right{
    float right
    font-size 14px
    line-height 60px
  }
}
</style>
