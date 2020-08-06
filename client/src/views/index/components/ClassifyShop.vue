<template>
  <div class="classify-shop">
    <div class="shop-title"><h4>甜点/蛋糕</h4> <h3>每一道甜品都能打开你的味蕾</h3></div>
    <ul class="shop-container">
      <li class="first" style="background:#fe7a65">
        <a class="first-images" href="#">
          <img src="http://122.152.205.72:88/foodie/category/cake.png"/>
        </a>
      </li>
      <li class="two border-right">
        <div class="border-bottom">
          <a href="#">
            <img src="http://122.152.205.72:88/foodie/cake-1002/img1.png" width="170" height="170"/>
          </a>
          <h3 class="title">【天天吃货】网红烘焙蛋糕 好吃的蛋糕</h3>
        </div>
        <div>
          <a href="#">
            <img src="http://122.152.205.72:88/foodie/cake-1005/img1.png" width="170" height="170"/>
          </a>
          <h3 class="title">【天天吃货】网红烘焙蛋糕 好吃的蛋糕</h3>
        </div>
      </li>
      <li class="three border-right">
        <div class="one-item">
          <h3 class="title">【天天吃货】网红烘焙蛋糕 好吃的蛋糕</h3>
          <a href="#">
            <img src="http://122.152.205.72:88/foodie/cake-1004/img1.png" width="170" height="170"/>
          </a>
        </div>
      </li>
      <li class="four border-right">
        <div class="border-bottom">
          <a href="#">
            <img src="http://122.152.205.72:88/foodie/cake-1001/img1.png" width="170" height="170"/>
          </a>
          <h3 class="title">【天天吃货】网红烘焙蛋糕 好吃的蛋糕</h3>
        </div>
        <div>
          <a href="#">
            <img src="http://122.152.205.72:88/foodie/cake-1006/img2.png" width="170" height="170"/>
          </a>
          <h3 class="title">【天天吃货】网红烘焙蛋糕 好吃的蛋糕</h3>
        </div>
      </li>
      <li class="five">
        <div class="one-item">
          <h3 class="title">【天天吃货】网红烘焙蛋糕 好吃的蛋糕</h3>
          <a href="#">
            <img src="http://122.152.205.72:88/foodie/cake-1003/img1.png" width="170" height="170"/>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ClassifyShop',
  data() {
    return {

    }
  },
}
</script>
<style lang="stylus">
.classify-shop {
  width 1200px
  margin 20px auto 0 auto

  .shop-title{
    text-align: left;
    position: relative;
    border-bottom: 2px solid #000;
    margin-top: 10px;
    overflow hidden

    h4{
      float: left;
      border: none;
      margin: 7px 0px;
      font-size: 20px;
      font-weight: 700;
    }
    h3{
      display: block;
      font-size: 14px;
      color: #999;
      float: left;
      margin-left: 10px;
      margin-top: 12px;
    }
  }
  .shop-container{
    height 480px
    text-align center
    li{
      width 20%
      height 100%
      overflow hidden
      float left
      position relative
    }
    div{
      padding-top 16px
    }
    .border-right{
      border-right 1px solid #eee
    }
    .border-bottom{
      border-bottom 1px solid #eee
    }
    .first-images{
      position: absolute;
      top: auto;
      margin: 0px 0px;
      bottom: 10px;
      right: 50%;
      width: 210px;
      margin-right: -105px;
    }
    .title{
      padding: 0px 14px 16px 14px;
      height 60px
      font-size 15px
    }
    .one-item{
      margin-top 112px
    }
  }
}
</style>
