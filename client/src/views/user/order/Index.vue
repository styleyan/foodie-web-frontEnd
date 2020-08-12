<template>
  <div class="user-info-order">
    <UserTopBar text="订单管理"></UserTopBar>
  </div>
</template>
<script>
import UserTopBar from '../components/UserTopBar'

export default {
  name: 'UserOrder',
  components: { UserTopBar },
  data() {
    return {

    }
  },
}
</script>
<style lang="stylus">
.user-info-order{
  background #fff
}
</style>
