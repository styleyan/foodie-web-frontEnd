<template>
  <div class="global-tabs">
    <ul>
      <li
        :style="liWidth"
        v-for="item in tabs"
        :key="item.key"
        :class="activeTab === item.key ? 'active':''"
        @click="clickHandle(item)">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'GlobalTabs',
  props: {
    // tab 列表
    tabs: {
      type: Array,
      default: () => ([]),
    },
  },
  data() {
    const activeTab = (this.tabs[0] && this.tabs[0].key) || ''
    const liWidth = 'width:' + (100 / this.tabs.length) + '%;'

    return {
      activeTab,
      liWidth,
    }
  },
  methods: {
    clickHandle(item) {
      this.activeTab = item.key
      this.$emit('active', item)
    },
  },
}
</script>
<style lang="stylus">
.global-tabs{
  height 40px
  overflow hidden
  text-align center
  background #eee
  margin-top 6px

  ul{
    height 39px
    line-height 39px
    font-size 14px
    border-bottom: 1px solid #eaeaea;
  }
  li{
    float left
    cursor default
    &:hover{
      color #555
    }
  }
  .active{
    background #fff
    color #0e90d2
    line-height 38px
    border-bottom: 2px solid #0e90d2
    position relative
    &:after{
      position: absolute;
      width: 0;
      height: 0;
      bottom: 0px;
      left: 50%;
      margin-left: -5px;
      border: 6px rgba(0, 0, 0, 0) solid;
      content: "";
      z-index: 1;
      border-bottom-color: #0e90d2;
    }
  }
}
</style>
