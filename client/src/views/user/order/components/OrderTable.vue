<template>
  <div class="order-table">
    <ul class="hd">
      <li class="th-item">商品</li>
      <li class="th-price">单价</li>
      <li class="th-number">数量</li>
      <li class="th-operation">支付方式</li>
      <li class="th-amount">合计</li>
      <li class="th-status">交易状态</li>
      <li class="th-change">交易操作</li>
    </ul>
    <ul class="order-list">
      <li v-for="item in [2,3]" :key="item">
        <p class="info">订单编号：2008099859GDXPM8<span class="time">成交时间：2020年08月09日 1:01:13</span></p>
        <div class="od">
          <dl>
            <dt class="th-item">
              <img class="shop-img" src="http://122.152.205.72:88/foodie/cake-1002/img1.png" width="78" height="78"/>
              <span class="name">【天天吃货】网红烘焙蛋糕 好吃的蛋糕</span>
              <span class="type">规格：巧克力</span>
            </dt>
            <dd class="th-price">￥360</dd>
            <dd class="th-number">x1</dd>
            <dd class="th-operation">
              <img class="alipay" style="display:none" :src="AlipayImg"/>
              <img class="wxpay" :src="WxpayImg"/>
            </dd>
            <dd class="th-amount">
              <span class="count-money">合计: 360元</span>
              <span class="yf">含运费: 包邮</span>
            </dd>
            <dd class="th-status">等待付款</dd>
            <dd class="th-change"><a class="btn-pay" href="javascript:void(0)">一键付款</a></dd>
          </dl>
          <dl>
            <dt class="th-item">
              <img class="shop-img" src="http://122.152.205.72:88/foodie/cake-1002/img1.png" width="78" height="78"/>
              <span class="name">【天天吃货】网红烘焙蛋糕 好吃的蛋糕</span>
              <span class="type">规格：巧克力</span>
            </dt>
            <dd class="th-price">￥360</dd>
            <dd class="th-number">x1</dd>
            <dd class="th-operation">
              <img class="alipay" style="display:none" :src="AlipayImg"/>
              <img class="wxpay" :src="WxpayImg"/>
            </dd>
            <dd class="th-amount">
              <span class="count-money">合计: 360元</span>
              <span class="yf">含运费: 包邮</span>
            </dd>
            <dd class="th-status">等待付款</dd>
            <dd class="th-change"><a class="btn-pay" href="javascript:void(0)">一键付款</a></dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import AlipayImg from '@/assets/images/alipay.png'
import WxpayImg from '@/assets/images/wxpay.png'

export default {
  name: 'OrderTable',
  data() {
    return {
      AlipayImg,
      WxpayImg,
    }
  },
}
</script>
<style lang="stylus">
.order-table{
  margin 10px

  .th-item{
    width 40%
  }
  .th-price{
    width 10%
  }
  .th-number{
    width 5%
  }
  .th-operation{
    width 15%
  }
  .th-amount{
    width 10%
  }
  .th-status{
    width 10%
  }
  .th-change{
    width 10%
  }
  .hd{
    width: 100%;
    overflow: hidden;
    padding: 10px 0px;
    border: 1px solid #EEE;
    font-size 14px
    text-align center
    li{
      float left
    }
  }

  .order-list{
    font-size 14px

    li{
      margin-bottom 10px
    }
    .od{
      border: 1px solid #E4EAEE;
      padding: 20px 5px 0 5px;
    }
    dl{
      margin-bottom 20px
    }
    .info{
      padding 10px
    }
    .time{
      padding-left 20px
      color #666
    }
    dl{
      overflow hidden
    }
    dt,dd{
      float left
    }
    dt{
      overflow hidden
    }
    .shop-img{
      float left
      margin-right 10px
    }
    .name{
      font-weight 700
      display block
      margin-bottom 6px
    }
    .type{
      display block
      color #9C9C9C
    }
    .th-price,.th-number,.th-status{
      text-align center
      line-height 78px
    }
    .th-operation,.th-amount{
      text-align center
    }
    .alipay{
      width 60%
      margin-top 22px
    }
    .wxpay{
      width 70%
      margin-top 26px
    }
    .count-money{
      display block
      margin 18px 0 4px 0
      font-weight 700
    }
    .yf{
      color #b9b9b9
    }
    .btn-pay{
      display block
      margin 24px auto 0 auto
      width 80px
      padding 6px 0
      color #fff
      text-align center
      background-color: #dd514c;
    }
  }
}
</style>
