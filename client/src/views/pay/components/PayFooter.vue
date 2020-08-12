<template>
  <footer class="pay-footer">
    <p>
      © 2020&nbsp;-&nbsp; <a href="https://www.isyxf.com" target="_blank">Y. Jer&nbsp;的虚拟笔记</a>&nbsp;-&nbsp;<a target="_blank" rel="nofollow noopener" href="http://beian.miit.gov.cn/">浙ICP备&nbsp;19042205号</a>&nbsp;&nbsp;|&nbsp;&nbsp;Powered by&nbsp;&nbsp;<a target="_blank" href="https://github.com/vuejs/vue" class="beian">Vue</a>
    </p>
  </footer>
</template>
<script>
export default {
  name: 'PayFooter',
  data() {
    return {

    }
  },
}
</script>
<style lang="stylus">
.pay-footer{
  width 1000px
  margin 60px auto 30px auto
  text-align: center;
  display: block;
  font-size 12px
  color: #bbb;
  a{
    color: #bbb;
  }
}
</style>
