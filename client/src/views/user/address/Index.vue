<template>
  <div class="user-info-address">
    <UserTopBar text="收货地址"></UserTopBar>
    <AddressInfo></AddressInfo>
    <div @click="showAddressEdit" class="btn-danger">添加新地址</div>
    <AddressEdit v-model="addressEditStatus"></AddressEdit>
  </div>
</template>
<script>
import UserTopBar from '../components/UserTopBar'
import AddressEdit from '@/components/AddressEdit/Index'
import AddressInfo from '@/components/AddressInfo/Index'

export default {
  name: 'UserInfoAddress',
  components: { UserTopBar, AddressEdit, AddressInfo },
  data() {
    return {
      addressEditStatus: false,
    }
  },
  methods: {
    showAddressEdit() {
      this.addressEditStatus = true
    },
  },
}
</script>
<style lang="stylus">
.user-info-address{
  background #fff
  overflow auto
  .address-info{
    padding 20px 0 0 10px
  }

  .btn-danger{
    float left
    padding: 0.6em;
    margin 20px 0 30px 10px
    cursor pointer
    color: #fff;
    background-color: #dd514c;
    border-color: #dd514c;
    font-size 12px
    &:hover{
      background-color #d7342e
    }
  }
}
</style>
