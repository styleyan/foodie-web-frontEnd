<template>
  <div class="pay-page">
    <GlobalHeader></GlobalHeader>
    <div class="pay-content">
      <div class="address-content-hd">
        <h3>确认收货地址</h3>
        <div @click="showAddressEdit" class="btn-danger">使用新地址</div>
      </div>
      <AddressInfo></AddressInfo>
      <PayMethod></PayMethod>
      <PayOrderInfo></PayOrderInfo>
      <div class="order-confirm">
        <h3>合计（包邮）<span>¥358.2</span></h3>
        <div class="confirm-dl">
          <dl class="confirm-sf">
            <dt>实付款：</dt>
            <dd>¥358.2</dd>
          </dl>
          <dl class="confirm-dz">
            <dt>寄送至：</dt>
            <dd>北京 北京 东城区 xxxx</dd>
          </dl>
          <dl class="confirm-yh">
            <dt>收货人：</dt>
            <dd>张四启 18810218133</dd>
          </dl>
        </div>

        <a class="btn-go" href="#">提交订单</a>
      </div>
    </div>
    <AddressEdit v-model="addressEditStatus"></AddressEdit>
    <GlobalFooter class="shop-cart-footer"></GlobalFooter>
  </div>
</template>
<script>
import GlobalHeader from '@/components/GlobalHeader.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'
import AddressInfo from './components/AddressInfo/Index'
import PayMethod from './components/PayMethod/Index'
import PayOrderInfo from './components/PayOrderInfo'
import AddressEdit from './components/AddressEdit/Index'

export default {
  name: 'Pay',
  components: { GlobalHeader, GlobalFooter, AddressInfo, PayMethod, PayOrderInfo, AddressEdit },
  data() {
    return {
      addressEditStatus: false,
    }
  },
  created() {
  },
  methods: {
    showAddressEdit() {
      this.addressEditStatus = true
    },
  },
}
</script>
<style lang="stylus">
.pay-content{
  width 1000px
  margin 0 auto
  overflow auto
  padding-bottom 30px

  .address-content-hd{
    overflow hidden
    font-size 14px
    font-weight 700

    h3{
      float left
      line-height 36px
      margin-right 20px
    }
    .btn-danger{
      float left
      padding: 0.3em 0.6em;
      margin-top 5px
      cursor pointer
      color: #fff;
      background-color: #dd514c;
      border-color: #dd514c;
      font-size 12px
      &:hover{
        background-color #d7342e
      }
    }
  }
  .order-confirm{
    text-align left
    overflow hidden
    width 260px
    float right
    font-size 14px
    h3{
      padding 10px 0 0 20px
      font-weight 700
      text-align right
      span{
        color #F64000
      }
    }
    .confirm-dl{
      margin-top 12px
      border 2px solid #F64000
      padding 10px 20px
      dl{
        overflow hidden
        margin-bottom 10px
        line-height 24px
      }
      dd,dt{
        float left
      }
      dt{
        font-weight 700
      }
      .confirm-sf{
        dd{
          font-size 20px
          font-weight 700
          color #F64000
        }
      }
    }
    .btn-go{
      margin-top 10px
      float right
      display: block;
      padding: 0 26px;
      height: 36px;
      font: 400 18px/36px arial;
      font-size: 18px;
      background-color: #f50;
      color: #fff;
      text-align: center;
      cursor: pointer;
      outline: 0;
      z-index: 999;
    }
  }
}
.shop-cart-footer{
  width 1000px
}
</style>
