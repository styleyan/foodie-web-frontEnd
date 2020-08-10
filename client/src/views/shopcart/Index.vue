<template>
  <div class="shop-cart-page">
    <GlobalHeader></GlobalHeader>
    <div class="shop-cart-content">
      <table cellspacing="0" cellpadding="0" class="shop-cart-item">
        <thead>
          <tr>
            <th class="shop-info"><span class="shop-info-th">商品信息</span></th>
            <th class="shop-price">单价</th>
            <th class="shop-num">数量</th>
            <th class="shop-money">金额</th>
            <th class="shop-edit">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in [1,2,3]" :key="index">
            <td class="shop-info">
              <dl class="shop-info-dl">
                <dt><input type="checkbox"/></dt>
                <dd class="img"><img src="http://122.152.205.72:88/foodie/bingan-1005/img1.png" width="80" height="80"/></dd>
                <dd>
                  <a class="name" href="#">【天天吃货】夹心吐司面包 早餐面包 早点早饭</a>
                  <span class="sku-line">规格：巧克力</span>
                </dd>
              </dl>
            </td>
            <td class="shop-price"><del class="raw">220</del><b>198</b></td>
            <td class="shop-num">1</td>
            <td class="shop-money">198</td>
            <td class="shop-edit"><span class="del-edit">删除</span></td>
          </tr>
        </tbody>
      </table>
      <div class="float-bar-wrapper">
        <div class="bar-left">
          <input type="checkbox"/>全选
        </div>
        <div class="bar-right">
          已选商品&nbsp;0&nbsp;件&nbsp;&nbsp;合计:&nbsp;<strong class="price">¥<em>0</em>元</strong>
          <a href="#" class="btn-area">结算</a>
        </div>
      </div>
    </div>
    <GlobalFooter class="shop-cart-footer"></GlobalFooter>
  </div>
</template>
<script>
import GlobalHeader from '@/components/GlobalHeader.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'

export default {
  name: 'ShopCart',
  components: { GlobalHeader, GlobalFooter },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  },
}
</script>
<style lang="stylus">
.shop-cart-content{
  width 1000px
  margin 0 auto

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
  }

  .float-bar-wrapper{
    margin-top 10px
    overflow hidden
    height 52px
    line-height 52px
    background #eee
    font-size 14px

    .bar-left{
      float left
      padding-left 9px
    }
    .bar-right{
      float right
      position relative
      padding-right 100px
    }
    .price{
      color #F40
      font-size 16px
    }
    .btn-area{
      width 80px
      position absolute
      right 0
      top 0
      background #f03726
      color #fff
      font-weight 700

      &:hover{
        background #F40
      }
    }
  }
}
.shop-cart-footer{
  width 1000px
}
</style>
