<template>
  <div class="pay-order-info">
    <h3 class="hd">确认订单信息</h3>
    <table cellspacing="0" cellpadding="0" class="shop-cart-item">
        <thead>
          <tr>
            <th class="shop-info"><span class="shop-info-th">商品信息</span></th>
            <th class="shop-price">单价</th>
            <th class="shop-num">数量</th>
            <th class="shop-money">金额</th>
            <th class="shop-edit">配送方式</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in [1,2,3]" :key="index">
            <td class="shop-info">
              <dl class="shop-info-dl">
                <dt>&nbsp;&nbsp;&nbsp;&nbsp;</dt>
                <dd class="img"><img src="http://122.152.205.72:88/foodie/bingan-1005/img1.png" width="80" height="80"/></dd>
                <dd>
                  <a class="name" href="#">【天天吃货】夹心吐司面包 早餐面包 早点早饭</a>
                  <span class="sku-line">规格：巧克力</span>
                </dd>
              </dl>
            </td>
            <td class="shop-price"><b>198</b></td>
            <td class="shop-num">1</td>
            <td class="shop-money">198</td>
            <td class="shop-edit">包邮</td>
          </tr>
          <tr>
            <td class="td-message" colspan="5">
              买家留言：<input class="leaving-message" type="text" placeholder="选填，可写备注"/>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>
<script>
export default {
  name: 'PayOrderInfo',
  data() {
    return {

    }
  },
}
</script>
<style lang="stylus">
.pay-order-info{
  text-align left
  margin-top 30px
  .hd{
    font-size 14px
    font-weight 700
    margin-bottom 10px
  }
  .shop-cart-item{
    text-align left
    font-size 14px
    border 2px solid #f5f5f5

    thead{
      height 50px
      line-height 50px

      th{
        border-bottom 3px solid #f5f5f5
      }
    }

    tbody{
      td{
        padding 10px 0 15px 0
        border-bottom #F5F5F5 1px solid
        vertical-align middle
      }
    }

    th{
      font-size 16px
    }
    .shop-info-th{
      padding-left 28px
    }
    .shop-info{
      width 536px
    }
    .shop-num{
      width 126px
    }
    .shop-price{
      width 126px
    }
    .shop-money{
      width 126px
    }
    .shop-edit{
      width 80px
    }
    .raw{
      display block
      color #9C9C9C
      font-size 12px
      padding-left 2px
    }
    .shop-info-dl{
      overflow hidden
      dt,dd{
        float left
      }
      dt{
        margin 0 5px
      }
      .name{
        display block
        line-height 20px
        &:hover{
          color #095f8a
        }
      }
      .img{
        margin-right 6px
      }
      .sku-line{
        display block
        padding 6px
        color: #9C9C9C;
        overflow: hidden;
      }
    }
    .del-edit{
      &:hover{
        cursor pointer
        color #f03726;
      }
    }
    .td-message{
      padding 20px 0 20px 22px
    }
    .leaving-message{
      width 280px
      border 1px solid #f5f5f5
      line-height 24px
      padding-left 10px
      font-size 12px
    }
  }
}
</style>
