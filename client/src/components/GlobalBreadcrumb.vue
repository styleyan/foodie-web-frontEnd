<template>
  <div class="global-breadcrumb">
    <ul>
      <li v-for="(item,key) in list" :key="key" :class="!item.href ? 'am-active' : '' ">
        <template v-if="item.href">
          <a :href="item.href">{{item.text}}</a>
        </template>
        <template v-else>
          {{item.text}}
        </template>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'GlobalBreadcrumb',
  props: {
    list: {
      type: Array,
      default: () => ([]),
    },
  },
  data() {
    return {}
  },
}
</script>
<style lang="stylus">
.global-breadcrumb{
  margin: 10px auto;
  padding: .7em .5em;
  font-size: 85%;
  font-size 14px
  text-align left

  li{
    display inline-block
  }
  li + li:before{
    content: "/\00a0";
    padding: 0 8px;
    color: #ccc;
  }
  a{
    text-decoration: none;
    outline: none;
  }
  .am-active{
    color: #999;
  }
}
</style>
