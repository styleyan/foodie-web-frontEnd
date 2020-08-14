<template>
  <div class="user-info-edit">
    <UserTopBar text="个人资料"></UserTopBar>
    <dl class="user-info-pic">
      <dt>
        <img src="http://122.152.205.72:88/group1/M00/00/05/CpoxxFw_8_qAIlFXAAAcIhVPdSg994.png"/>
        <input class="file" type="file" allowexts="jpeg,jpg,png,gif" accept="image/gif,image/jpeg,image/jpg,image/png" />
      </dt>
      <dd>用户名：xiaofei.su</dd>
    </dl>
    <form class="user-form">
      <ul>
        <li>
          <span class="label">昵称</span><input type="text"/>
        </li>
        <li>
          <span class="label">真实姓名</span><input type="text"/>
        </li>
        <li>
          <span class="label">性别</span>
          <label><input type="radio" name="sex"/><span class="radio-span">男</span></label>
          <label><input type="radio" name="sex"/><span class="radio-span">女</span></label>
          <label><input type="radio" name="sex"/><span class="radio-span">保密</span></label>
        </li>
        <li>
          <span class="label">生日</span><GlobalDatepicker v-on:picked="picked"></GlobalDatepicker>
        </li>
        <li>
          <span class="label">手机</span><input type="text"/>
        </li>
        <li>
          <span class="label">电子邮件</span><input type="text"/>
        </li>
        <li>
          <a class="btn-save" href="javascript:void(0)">保存修改</a>
        </li>
      </ul>
    </form>
  </div>
</template>
<script>
import UserTopBar from '../components/UserTopBar'
import GlobalDatepicker from '@/components/GlobalDatepicker'

export default {
  name: 'UserInfoEdit',
  components: { UserTopBar, GlobalDatepicker },
  data() {
    return {

    }
  },
  methods: {
    picked(year, month, date) {
      console.warn(`你选择了${year}年${month}月${date}日`)
    },
  },
}
</script>
<style lang="stylus">
.user-info-edit{
  background #fff
  .user-info-pic{
    margin 50px
    padding-bottom 16px
    border-bottom 1px solid #eee
    font-size 14px
    dt,dd{
      display inline-block
      vertical-align middle
    }
    dt{
      width 100px
      height 107px
      position relative
      overflow hidden
      margin-right 20px
    }
    img{
      width 100%
      height 100%
    }
    .file{
      left 0
      top 0
      position absolute
      font-size 80px
      opacity 0
    }
  }
  .user-form{
    ul{
      margin 0 50px
      padding-bottom 30px
    }

    .label{
      display inline-block
      width 80px
      text-align right
      margin-right 10px
      font-size 14px
      vertical-align sub
    }

    li{
      margin-bottom 30px
    }
    input[type="text"]{
      border 1px solid #E4EAEE
      width 700px
      line-height 30px
      padding-left 10px
    }
    label{
      margin-right 12px
    }
    .radio-span{
      padding-left 2px
      vertical-align text-top
    }
  }
  .btn-save{
    display block
    width 72px
    margin 0 auto
    padding 4px 8px
    color #fff
    background #dd514c
    font-size 14px

  }
}
</style>
