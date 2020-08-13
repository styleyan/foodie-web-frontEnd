<template>
  <div class="login-page">
    <div class="hd">
      <img height="60" :src="LogoBigImg"/>
    </div>
    <div class="login-banner">
      <div class="content">
        <img :src="LoginPageImg"/>
        <UserLogin v-show="false"/>
        <UserRegister/>
      </div>
    </div>
    <GlobalFooter></GlobalFooter>
  </div>
</template>
<script>
import LogoBigImg from '@/assets/images/logobig.png'
import LoginPageImg from '@/assets/images/loginpage.png'
import GlobalFooter from '@/components/GlobalFooter.vue'
import UserLogin from './components/UserLogin.vue'
import UserRegister from './components/UserRegister'

export default {
  name: 'login',
  components: { GlobalFooter, UserLogin, UserRegister },
  data() {
    return {
      LogoBigImg,
      LoginPageImg,
    }
  },
  mounted() {
  },
  methods: {

  },
}
</script>
<style lang="stylus">
html,body{
  height 100%
  background #f5f5f5
}
.login-page{
  .hd{
    height 60px
    width 980px
    margin 0 auto
  }
  .login-banner{
    height 470px
    background #0ec88f

    .content{
      width 980px
      margin 0 auto
      position relative
    }
  }
  .global-footer{
    border-top 0
  }
}
</style>
