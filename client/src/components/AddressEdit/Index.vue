<template>
  <div v-show="visible" class="add-edit">
    <div class="add-edit-mask"></div>
    <div class="add-edit-dialog">
      <h3>新增地址</h3>
      <ul>
        <li>
          <span class="label">收货人</span>
          <input type="text" placeholder="收货人名称"/>
        </li>
        <li>
          <span class="label">手机号码</span>
          <input type="text" placeholder="手机号码必填"/>
        </li>
        <li>
          <span class="label">所在地</span>
          <select>
            <option>北京</option>
          </select>
          <select>
            <option>北京</option>
          </select>
          <select>
            <option>东城区</option>
          </select>
        </li>
        <li>
          <span class="label">详细地址</span>
          <textarea placeholder="请输入100字以内详细地址..."></textarea>
        </li>
      </ul>
      <p class="btn-wrap">
        <a href="#" class="btn-save">保存</a>
        <a href="javascript:void(0)" @click="cancelHandle" class="btn-cancel">取消</a></p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AddEdit',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    const cities = window.arrAll
    return {
      visible: this.value,
      dialogStatus: true,
      cities,
    }
  },
  watch: {
    visible(val) {
      this.$emit('input', val)
    },
    value(val) {
      this.visible = val
    },
  },
  created() {
    console.log(this.cities)
  },
  methods: {
    /**
     * 取消弹框
     */
    cancelHandle() {
      this.visible = false
    },
  },
}
</script>
<style lang="stylus">
.add-edit-mask{
  z-index: 10000000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.5;
  -moz-opacity: 0.5;
  display: block;
}
.add-edit-dialog{
  z-index: 10000009;
  position: fixed;
  bottom: 50%;
  left: 50%;
  width: 500px;
  height: 400px;
  margin-bottom: -200px;
  margin-left: -250px;
  display: block;
  background: #fff;

  h3{
    padding: 16px 0 16px 10px;
    font-size 18px
    font-weight 700
    color #dd514c
    text-align left
    border-bottom 1px solid #eeeeee
  }
  ul{
    padding-top 26px
  }
  li{
    text-align left
    margin-bottom 16px
  }
  .label{
    font-size 13px
    display inline-block
    width 80px
    padding-right 8px
    text-align right
    vertical-align middle
  }
  input{
    border 1px solid #ccc
    width 370px
    padding 8px
  }
  select{
    width 120px
    height 30px
    border 1px solid #ccc
    margin-right 5px

    color #666
  }
  textarea{
    width 370px
    height 70px
    padding 4px
    border 1px solid #ccc
    vertical-align top
    line-height 22px
  }
  .btn-wrap{
    margin-top 26px
    text-align center
  }
  .btn-save,.btn-cancel{
    display inline-block
    padding 6px 16px
  }
  .btn-save{
    color: #fff;
    background-color: #dd514c;
    border-color: #dd514c;
  }
  .btn-cancel{
    color #666
  }
}
</style>
