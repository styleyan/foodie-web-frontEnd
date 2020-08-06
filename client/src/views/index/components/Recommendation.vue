<template>
  <div class="recommendation">
    <GlobalSeckill></GlobalSeckill>
    <ul class="skill-list">
      <li v-for="(item,key) in [2,3,4,5,6]" :key="key">
        <a href="#">
          <div class="seckill-item__image">
            <img src="https://img10.360buyimg.com/seckillcms/s140x140_jfs/t1/147573/18/4420/203709/5f27b066E1ba707bd/3963bf1f4ae3643f.jpg.webp">
          </div>
          <h6 class="seckill-item__name">【秒杀6号14点开始】茅台王子酒 传承1999  酱香型高度白酒  53度 礼盒酒喜酒特价优级纯粮酒 整箱装酒水</h6>
          <div class="seckill-item__price">
            <span class="price-miaosha">
              <i>¥</i><span>2988.00</span>
            </span>
            <span class="price-origin">
              <i>¥</i><span>3588.00</span>
            </span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import GlobalSeckill from '@/components/GlobalSeckill'

export default {
  name: 'Recommendation',
  components: { GlobalSeckill },
  data() {
    return {

    }
  },
}
</script>
<style lang="stylus">
.recommendation{
  width 1200px
  margin 0 auto
  overflow hidden

  .skill-list{
    margin-top 20px
    position: relative;
    float: left;
    width: 1000px;
    height: 100%;
    overflow: hidden;

    li{
      float left
      width 200px
    }
    .seckill-item__image{
      width: 140px;
      height: 140px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 30px;
    }

    .seckill-item__name{
      width: 160px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 13px;
      font-size: 12px;
      font-weight: 400;
      color: #333;
      -webkit-transition: color .2s ease;
      transition: color .2s ease;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .seckill-item__price{
      width: 160px;
      height: 24px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 7px;
      border: 1px solid #e1251b;
      position: relative;
      box-sizing: border-box;
      line-height: 24px;
      overflow: hidden;
      background-color: #e1251b;
    }
    .price-miaosha{
      width: 92px;
      height: 100%;
      text-align: center;
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      line-height: 22px;
      float: left;

      &:before{
        content: " ";
        width: 0;
        height: 0;
        border-color: transparent white transparent transparent;
        border-style: solid;
        border-width: 22px 8px 0 0;
        position: absolute;
        top: 0;
        left: 84px;
      }
      i{
        font-size: 12px;
        font-weight: 400;
        padding-right: 2px;
      }
    }
    .price-origin{
      height: 100%;
      width: 66px;
      float: right;
      background: #fff;
      text-align: center;
      color: #999;
      font-size: 12px;
      line-height: 22px;
      box-sizing: border-box;
      text-decoration: line-through;
      vertical-align: top;
    }
  }
}
</style>
