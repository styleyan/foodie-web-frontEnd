<template>
  <div class="user-login">
    <h3>登录商城</h3>
    <ul class="input-warp">
      <li><i class="iconfont icon-user-center"></i><input v-model="loginData.username" type="text"/></li>
      <li><i class="iconfont icon-lock"></i><input v-model="loginData.password" type="password"/></li>
    </ul>
    <p class="rg"><a href="javascript:void(0)" @click="switchHandle">前往注册</a></p>
    <p><button class="login-btn" @click="loginHandle">登录</button></p>
  </div>
</template>
<script>
import Cookies from 'js-cookie'

export default {
  name: 'UserLogin',
  data() {
    return {
      loginData: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    loginHandle() {
      this.$axios.userLogin({ ...this.loginData }).then((data) => {
        this.$store.commit('updateUser', data)
        Cookies.set('u_info', data, { expires: 365, path: '/' })
        this.$router.push({
          name: 'index',
        })
      }).catch((error) => {
        console.log(error)
      })
    },
    /**
     * 切换
     */
    switchHandle() {
      this.$emit('switch', 0)
    },
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
    background #fff
    padding 20px 12px
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
    font-size 22px
  }
  .icon-lock{
    font-size 18px
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
