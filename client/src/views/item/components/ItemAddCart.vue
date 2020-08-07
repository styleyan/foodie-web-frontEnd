<template>
  <div class="item-add-cart">
    <h1 class="hd">【天天吃货】可爱美丽甜甜圈 最美下午茶</h1>
    <ul class="detail-list">
      <li><span class="label">店铺优惠</span><span class="gold">9折优惠</span></li>
      <li><span class="label">促销价</span><span class="gold"><em>¥</em><strong class="price">315</strong></span></li>
      <li><span class="label">原价</span><span><del>¥350</del></span></li>
      <li><span class="label">累计销售</span><span>878</span></li>
    </ul>
    <dl class="cly-wrap">
      <dt class="left-label">口味</dt>
      <dd class="cly-list">
        巧克力<i class="iconfont icon-right-check"></i>
      </dd>
      <dd class="cly-list cly-active">
        巧克力<i class="iconfont icon-right-check"></i>
      </dd>
    </dl>
    <dl class="mum-wrap">
      <dt class="left-label">数量</dt>
      <dd class="select-number"><span>-</span><input class="num" value="1" type="text"/><span>+</span></dd>
      <dd>库存253件</dd>
    </dl>
    <a href="javascript:void(0);" class="add-btn">加入购物车</a>
  </div>
</template>
<script>
export default {
  name: 'ItemAddCart',
  data() {
    return {

    }
  },
}
</script>
<style lang="stylus">
.item-add-cart{
  float:left
  width 700px
  text-align left
  font-size 14px
  .hd{
    padding: 8px 0;
    font-size: 18px;
    padding-bottom: 0.4em;
    line-height: 1;
    font-weight: 700;
    color: #000;
  }
  .label{
    display inline-block
    width 80px
    color #888
  }
  .gold{
    margin-top: 8px;
    color: #E4393C;
    font-weight: bold;
  }
  .detail-list{
    background: #F7F7F7;
    overflow: hidden;
    padding: 12px;

    li{
      margin-bottom 8px
    }
  }
  .price{
    color #c00
    font-size: 24px;
    font-weight: bold;
  }
  .add-btn{
    margin 40px 0 0 50px
    display block
    width: 160px;
    height: 46px;
    padding: 0px 26px;
    font-weight: bold;
    line-height: 46px;
    font-size: 18px;
    color: #FFF;
    background-color: rgb(223, 46, 51);
  }
  .left-label{
    display inline-block
    font-size: 12px;
    color: #666;
    margin-right 20px
  }
  .cly-wrap{
    margin 20px 0
  }
  .cly-list{
    margin: 5px;
    cursor: pointer;
    display inline-block
    border: 2px solid #F5F5F5;
    color: #000;
    padding: 3px 4px;
    position relative

    .iconfont{
      display none
      position absolute
      right 0
      bottom -1px
      color #BE0106
    }
  }
  .cly-active{
    border-color #BE0106
    .iconfont{
      display block
    }
  }

  .mum-wrap{
    dd{
      display inline-block
    }
    .select-number{
      margin 0 10px 0 7px
    }
    span{
      display inline-block
      width: 28px;
      height 28px;
      text-align center
      line-height 28px
      cursor: pointer;
      color: #444;
      background-color: #e6e6e6;
    }
    .num{
      text-align center
      vertical-align bottom
      height 28px
      border 1px solid #d8d7d7
      width 40px
    }
  }
}
</style>
