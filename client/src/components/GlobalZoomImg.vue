<template>
  <div class="global-zoom-img">
    <div class="big-img">
      <img :src="mainItemImg[urlKey]" width="400" height="400" :rel="mainItemImg[urlKey]" class="jqzoom" style="cursor: crosshair;">
    </div>
    <ul class="tb-thumb">
      <li
        v-for="(item, key) in itemImgList"
        :key="key"
        @click="selectHandle(item)"
        :class="item[urlKey] === mainItemImg[urlKey] ? 'tb-selected':''">
        <img width="60" height="60" :src="item[urlKey]" :big="item[urlKey]" :mid="item[urlKey]">
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'GlobalZoomImg',
  props: {
    itemImgList: {
      type: Array,
      default: () => ([]),
    },
    urlKey: {
      type: String,
      default: 'url',
    },
  },
  data() {
    return {
      mainItemImg: {},
      isInit: false,
    }
  },
  watch: {
    itemImgList(val) {
      this.init()
    },
  },
  methods: {
    /**
     * 选中
     */
    selectHandle(item) {
      this.mainItemImg = item
    },
    /**
     * 初始化
     */
    init() {
      if (this.isInit) {
        return
      }
      this.isInit = true
      this.mainItemImg = this.itemImgList[0]
      window.$('.jqzoom').imagezoom()
    },
  },
}
</script>
<style lang="stylus">
.global-zoom-img{
  width 400px
  .big-img{
    border: 1px solid #CDCDCD;
    position: relative;
    z-index: 1;
    height: 400px;
    width: 400px;

    img{
      height: 400px;
      width: 400px;
    }
  }

  .tb-thumb{
    margin: 10px 0 0;
    overflow: hidden;

    li{
      background: none repeat scroll 0 0 transparent;
      float: left;
      height: 62px;
      margin: 0 6px 0 0;
      overflow: hidden;
      padding: 1px;
    }
    .tb-selected{
      background: none repeat scroll 0 0 #C30008;
      height: 62px;
    }
  }
}
.zoomMask{
  position: absolute;
  background: url(../assets/images/mask.png)repeat scroll 0 0 transparent;
  cursor: move;
  z-index: 1;
}
.zoomDiv{
  z-index: 999;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 400px;
  height: 400px;
  background: #ffffff;
  border: 1px solid #CCCCCC;
  display: none;
  text-align: center;
  overflow: hidden;
}
</style>
