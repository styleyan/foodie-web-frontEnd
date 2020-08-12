<template>
  <div class="user-center-index">
    <dl class="user-info">
      <dt><a href="#"><img width="57" height="57" src="http://122.152.205.72:88/group1/M00/00/05/CpoxxFw_8_qAIlFXAAAcIhVPdSg994.png"/></a></dt>
      <dd>(xiaofei.su)</dd>
    </dl>
    <div class="my-order">
      <div class="bar"><a href="#">全部订单</a>我的订单</div>
      <ul class="my-order-type">
        <li>
          <a href="#">
            <i class="icon1"/>
            代付款<b class="num">5</b>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="icon2"/>
            代发货<b class="num">5</b>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="icon3"/>
            代收货<b class="num">5</b>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="icon4"/>
            代评价<b class="num">5</b>
          </a>
        </li>
      </ul>
      <div class="my-order-bottom"></div>
    </div>

    <div class="my-order-list">
      <div class="bar">订单动向</div>
      <ul>
        <li class="dashed">
          <p>订单号：[2008127NG2AY8000]</p>
          <p class="status">您已付款，等待发货~</p>
          <p>付款时间：2020年08月12日 11:52:42</p>
        </li>
      </ul>
      <GlobalZpageNav v-bind:page="page" v-bind:page-size="pageSize" v-bind:total="total"
        v-bind:max-page="maxPage"  v-on:pagehandler="doPaging">
      </GlobalZpageNav>
    </div>
    <div class="noweather">
      <h3><i class="iconfont icon-date"></i>&nbsp;小日历</h3>
      <p class="day">12</p>
      <p>星期三</p>
      <p>2020年08月</p>
    </div>
  </div>
</template>
<script>
import GlobalZpageNav from '@/components/GlobalZpageNav.vue'

export default {
  name: 'UserCenterIndex',
  components: { GlobalZpageNav },
  data() {
    return {
      // 分页页数
      page: 1,
      // 分页每页显示数量
      pageSize: 10,
      // 总页数
      maxPage: 10,
      // 总记录数
      total: 100,
    }
  },
  methods: {
    doPaging(page) {
      this.page = page
    },
  },
}
</script>
<style lang="stylus">
.user-center-index{
  position relative
  padding-right 199px

  .user-info{
    box-sizing border-box
    height 102px
    background url('~@/assets/images/user/header-bg2.png') left top no-repeat
    padding 20px 0 0 12px
    dt,dd{
      display inline-block
    }
    dd{
      font-size 14px
      margin-left 10px
      color #fff
    }
  }

  .my-order{
    .bar{
      font-size: 15px;
      border-bottom: 1px solid #ececec;
      position: relative;
      padding: 11px 8px ;
      margin-top: 10px;
      background #fff

      a{
        float right
        margin-top 2px
        color #666
        font-size 13px
      }
    }
    .my-order-type{
      overflow hidden
      font-size 14px
      text-align center
      padding 10px 0 12px 0
      background #fff
      li{
        width 25%
        float left
      }
      i{
        display block
        margin 0 auto 2px auto
        width 30px
        height 30px
        background-size cover
        background-repeat none
      }
      .icon1{
        background-image url('~@/assets/images/user/pay.png')
      }
      .icon2{
        background-image url('~@/assets/images/user/send.png')
      }
      .icon3{
        background-image url('~@/assets/images/user/receive.png')
      }
      .icon4{
        background-image url('~@/assets/images/user/comment.png')
      }
      .num{
        padding-left 4px
        color #F40
      }
      a{
        color #333
      }
    }
    .my-order-bottom{
      background: url('~@/assets/images/user/side.png') repeat-x;
      height: 5px;
    }
  }

  .my-order-list{
    background #fff
    margin-top 14px
    .bar{
      padding: 11px 10px 8px 10px;
      font-size 15px
      border-bottom: 1px solid #ececec;
    }
    ul{
      font-size 13px
      padding 10px 10px 0 40px
    }
    .dashed{
      margin-bottom 20px
      border-bottom 1px dashed #ececec
    }
    p{
      margin-bottom 8px
    }
    .status{
      color #0e90d2
    }
  }

  .noweather{
    position absolute
    right 0
    top 0
    background #fff
    width 184px
    padding-bottom 20px
    text-align: center;

    h3{
      padding: 11px 0px 8px;
      margin-bottom 10px
      font-size: 15px;
      background: #f69 none repeat scroll 0% 0%;
      color: #fff;
    }
    p{
      color #f69
      font-size 14px
      margin-bottom 2px
    }
    .day{
      font-size 50px
    }
  }
}
</style>
