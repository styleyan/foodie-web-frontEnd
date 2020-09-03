<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import Cookies from 'js-cookie'

export default {
  name: 'app',
  data() {
    return {}
  },
  created() {
    const _token_ = Cookies.get("_token_")
    if (_token_) {
      this.$axios.getUserInfo().then((data) => {
        this.$store.commit('updateUser', data)
      }).catch(error => {
        console.log(error)
      })
    }
  },
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
</style>
