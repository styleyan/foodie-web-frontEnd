<template>
  <div class="user-top-bar">
    {{text}}
  </div>
</template>
<script>
export default {
  name: 'UserTopBar',
  props: {
    text: {
      type: String,
      default: '个人资料',
    },
  },
  data() {
    return {

    }
  },
}
</script>
<style lang="stylus">
.user-top-bar{
  font-size 18px
  padding 16px 0
  border 1px solid #eee
  text-indent 10px
}
</style>
