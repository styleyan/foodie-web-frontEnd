<template>
  <div class="global-menu">
    <dl class="menu-item">
      <dt>全部分类</dt>
      <dd v-for="(item, key) in menus" :key="key">
        <a :href="item.href">{{item.text}}</a>
      </dd>
    </dl>
    <ul @mouseenter="enterHandle" @mouseleave="leaveHandle" class="menu-nav">
      <li
        v-for="(item, key) in navList"
        :key="key"
        :class="{'li-active': navActive === item.logo}"
        @mouseenter="enterNavHandle(item)"
        @mouseleave="leaveNavHandle(item)"
      >
        <i class="navs-size" :class="`navs-${item.logo}`"></i><span class="name">{{item.name}}</span><em>></em>
      </li>
    </ul>
    <div @mouseenter="enterHandle" @mouseleave="leaveHandle" v-show="navShowStatus" class="nav-container">
      <dl class="dl-sort">
        <dt>巧克力</dt>
        <dd><a href="#" target="_blank">黑巧克力</a></dd>
        <dd><a href="#" target="_blank">水电费水电费是</a></dd>
      </dl>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GlobalMenu',
  data() {
    return {
      menus: [
        { text: '首页', href: '/' },
        { text: '秒杀', href: '/ms' },
      ],
      navList: [
        { logo: 'cake', name: '甜点/蛋糕' },
        { logo: 'cookies', name: '饼干/膨化' },
        { logo: 'meat', name: '熟食/肉类' },
        { logo: 'cake', name: '甜点/蛋糕' },
        { logo: 'cake', name: '甜点/蛋糕' },
        { logo: 'cake', name: '甜点/蛋糕' },
        { logo: 'cake', name: '甜点/蛋糕' },
        { logo: 'cake', name: '甜点/蛋糕' },
        { logo: 'cake', name: '甜点/蛋糕' },
        { logo: 'cake', name: '甜点/蛋糕' },
      ],
      navShowStatus: false,
      navActive: '',
    }
  },
  methods: {
    /**
     * 鼠标移入菜单栏
     */
    enterHandle() {
      this.navShowStatus = true
    },
    /**
     * 鼠标移出菜单栏
     */
    leaveHandle() {
      this.navShowStatus = false
    },
    /**
     * 分类移入事件
     */
    enterNavHandle(item) {
      this.navActive = item.logo
      console.log(item)
    },
    /**
     * 分类移出事件
     */
    leaveNavHandle() {
      this.navActive = ''
    },
  },
}
</script>
<style lang="stylus">
.global-menu{
  width 1200px
  height 484px
  margin 0 auto
  position relative

  .menu-item{
    overflow hidden
    dt,dd{
      float left
      height 45px
      line-height 45px
      font-size 16px
    }
    dt{
      position: relative;
      z-index: 1;
      width 180px
      background: #d2364c;
      color #fff;
      text-align center
    }
    dd{
      font-weight 500
      &::before{
        content: '\20';
        display: inline-block;
        height: 16px;
        border-left: 1px solid #d9d9d9;
        width: 0;
        vertical-align: middle;
        margin-left: -1px;
      }
      a{
        display inline-block
        padding 0 25px
        color #333
      }
    }
  }

  .menu-nav{
    width 180px
    background #2b2b2b
    box-shadow: 8px 0 7px -3px rgba(0,0,0,.3);
    li{
      position relative
      height 45px
      line-height 45px
      border-top: 1px solid #333;
      border-bottom: 1px solid #252525;
      text-align left
    }
    .navs-size {
      position absolute
      left 20px
      top 7px
    }
    .name{
      font-size 14px
      margin-left 56px
      color #fff
    }
    em{
      color #9b9b9b
      position absolute
      right 15px
      top 0
    }
    .li-active{
      background #fff
      .name{
        color #333
      }
    }
  }

  .nav-container{
      position absolute
      height 450px
      width 770px
      background #fff;
      left 179px;
      top 45px
      border 1px solid #999
      border-left none

      .dl-sort{
        box-sizing border-box
        width 50%;
        float left
        padding 20px 40px 0 40px
        dt{
          width 100%
          margin-bottom 6px
          font-size: 14px;
          font-weight: bold;
          color: #db3e54;
          text-align: left;
        }
        dd{
          float left
          margin 2px 6px 4px 0

          a{
            line-height: 14px;
            color: #888;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding: 3px 10px;
            border: 1px solid #e6e6e6;

            &:hover{
              color: #db3e54;
            }
          }
        }
      }
  }
}
</style>
