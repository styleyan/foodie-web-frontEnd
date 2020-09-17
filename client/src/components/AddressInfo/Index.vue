<template>
  <div class="address-info">
    <ul>
      <li v-for="(item, index) in addressList" :key="index" :class="item.isDefault ? 'default' :''">
        <h4>{{item.receiver}}&nbsp;&nbsp;{{item.mobile}}</h4>
        <dl>
          <dt>收货地址：</dt>
          <dd>{{`${item.province}${item.city}${item.district}${item.detail}`}}</dd>
          <dd class="edit"><a href="javascript:void(0)">编辑</a><span class="line">|</span><a href="javascript:void(0)" @click="deleteHandle(item)">删除</a></dd>
        </dl>
        <ins class="deftip">默认地址</ins>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'AddressInfo',
  data() {
    return {
      addressList: [],
    }
  },
  created() {
    this.getList()
  },
  methods: {
    /**
     * 获取列表
     */
    getList() {
      this.$axios.addressList().then((data) => {
        this.addressList = data
      }).catch((error) => {
        console.log(error)
      })
    },
    /**
     * 删除
     */
    deleteHandle(item) {
      this.$axios.addressDelete({ addressId: item.id }).then(() => {
        this.getList()
      }).catch((error) => {
        console.log(error)
      })
    },
  },
}
</script>
<style lang="stylus">
.address-info{
  padding 10px 0 20px 0
  ul{
    overflow hidden
    text-align left
  }
  li{
    float left
    width 254px
    height 150px
    padding 10px
    margin-right 10px
    position relative
    background url("./peraddbg.png") no-repeat scroll 0% 0%
  }

  h4{
    font-weight 700
    line-height 22px
  }
  dd,dt{
    float left
    font-size 14px
  }
  .edit{
    box-sizing border-box
    width: 100%;
    position: absolute;
    right: 0;
    bottom: 20px;
    text-align right
    padding-right 16px
  }
  a:hover{
    color #095f8a
  }
  .line{
    padding 0 8px
  }
  .deftip{
    display none
    font-size 14px
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 0px 2px;
    text-decoration: none;
    opacity: 0.7;
    z-index: 3;
    background: #CCC none repeat scroll 0% 0%;
    color: #FFF;
  }
  // 默认选中样式
  .default{
    background url("./peraddressbg.png") no-repeat scroll 0% 0%
    .deftip{
      display block
    }
  }
}
</style>
