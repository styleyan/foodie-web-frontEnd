<template>
  <div class="global-skill">
    <div class="countdown-title">天天秒杀</div>
    <div class="countdown-desc"><strong>14:00</strong>点场 倒计时</div>
    <span class="timmer countdown-main">
      <span class="timmer__unit timmer__unit--hour">00</span>
      <span class="timmer__unit timmer__unit--minute">28</span>
      <span class="timmer__unit timmer__unit--second">58</span>
    </span>
  </div>
</template>
<script>
export default {
  name: 'GlobalSkill',
  data() {
    return {

    }
  },
}
</script>
<style lang="stylus">
.global-skill{
  margin-top 20px
  position: relative;
  float: left;
  width: 180px;
  height 260px
  color: #fff;
  background-color: #e83632;
  background-image: url("../assets/images/miaosha.png");
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;

  .countdown-title{
    width: 100%;
    margin-top: 31px;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
  }
  .countdown-desc{
    margin-top: 90px;
    font-size: 14px;
    text-align: center;
  }
  .countdown-main{
    margin-left: 26px;
    margin-top: 10px;
    width: 150px;
    height: 30px;
    line-height 30px
    display: block;
  }
  .timmer{
    color: #333;
    font-weight: 700;
  }
  .timmer__unit{
    position: relative;
    float: left;
    width: 30px;
    height: 30px;
    text-align: center;
    background-color: #2f3430;
    margin-right: 20px;
    color: white;
    font-size: 20px;
  }
}
</style>
