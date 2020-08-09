<template>
  <div class="shop-cart-page">
    <GlobalHeader></GlobalHeader>
    <div class="shop-cart-content">
      <table class="shop-cart-item">
        <th>
          <td>商品信息</td>
          <td>单价</td>
          <td>数量</td>
          <td>金额</td>
          <td>操作</td>
        </th>
        <tr>
          <td></td>
        </tr>
      </table>
    </div>
    <GlobalFooter></GlobalFooter>
  </div>
</template>
<script>
import GlobalHeader from '@/components/GlobalHeader.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'

export default {
  name: 'ShopCart',
  components: { GlobalHeader, GlobalFooter },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  },
}
</script>
<style lang="stylus">
.shop-cart-content{

}
</style>
