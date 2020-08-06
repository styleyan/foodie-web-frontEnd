<template>
  <footer class="global-footer">
    <p class="links">
      <a href="https://www.isyxf.com/" target="_blank">我的博客</a> <b>|</b>
      <a href="https://coding.imooc.com/class/217.html" target="_blank">xxxx</a> <b>|</b>
      <a href="https://coding.imooc.com/class/261.html" target="_blank">yyyyy</a> <b>|</b>
      <a href="https://coding.imooc.com/class/201.html" target="_blank">fffff</a> <b>|</b>
      <a href="https://coding.imooc.com/class/293.html" target="_blank">ccccc</a>
    </p>
    <p>
      © 2020&nbsp;-&nbsp; Y. Jer&nbsp;的虚拟笔记&nbsp;-&nbsp;<a target="_blank" rel="nofollow noopener" href="http://beian.miit.gov.cn/">浙ICP备&nbsp;19042205号</a>&nbsp;&nbsp;|&nbsp;&nbsp;Powered by&nbsp;&nbsp;<a target="_blank" href="https://github.com/vuejs/vue" class="beian">Vue</a>
    </p>
  </footer>
</template>
<script>
export default {
  name: 'GlobalFooter',
  data() {
    return {

    }
  },
}
</script>
<style lang="stylus">
.global-footer{
  width 1200px
  margin 20px auto
  text-align: left;
  display: block;
  position: relative;
  border-top: 2px solid #FF5400;
  font-size 14px
  color: #6C6C6C;
  a{
    color: #6C6C6C;
  }
  .links{
    margin-bottom: 8px;
    line-height: 27px;
    border-bottom: 1px solid #DDD;
    text-align: left;
    padding 4px 0

    a{
      margin: 0px 4px;
      white-space: nowrap;
    }
  }
}
</style>
