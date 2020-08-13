<template>
  <div class="user-login">
    <h3>用户注册</h3>
    <ul class="input-warp">
      <li><i class="iconfont icon-user-center"></i><input type="text" placeholder="用户名"/></li>
      <li><i class="iconfont icon-lock"></i><input type="password" placeholder="输入登录密码"/></li>
      <li><i class="iconfont icon-lock"></i><input type="password" placeholder="再次输入密码"/></li>
    </ul>
    <p class="rg"><a href="javascript:void(0)">已有账号？去登录</a></p>
    <p><button class="login-btn">注册</button></p>
  </div>
</template>
<script>
export default {
  name: 'UserLogin',
  data() {
    return {

    }
  },
}
</script>
<style lang="stylus">
.user-login{
  width: 360px;
  height: 430px;
  position: absolute;
  margin-top: 20px;
  margin-left: 0px;
  background: #f8f8f8;
  right: 2%;
  top 0
  padding: 10px 20px;

  h3{
    text-align: center;
    padding: 20px 0 20px 0;
    font-weight: 600;
    font-size 16px
  }

  .input-warp{
    padding 20px 12px 8px 12px
    li{
      background #fff
      margin-bottom 8px
    }
    input{
      border none
      width 260px
      margin-left 10px
      padding 5px 0
      line-height 26px
      text-indent 10px
    }
  }
  .iconfont{
    vertical-align middle
  }
  .icon-user-center{
    font-size 18px
  }
  .icon-lock{
    font-size 14px
    margin-left 4px
  }
  .rg{
    font-size 14px
    padding 14px 0
    text-align right
  }
  .login-btn {
    display block
    width 100%
    color: #fff;
    background-color: #0e90d2;
    border-color: #0e90d2;
    border none
    padding 8px 0
    cursor pointer
  }
}
</style>
