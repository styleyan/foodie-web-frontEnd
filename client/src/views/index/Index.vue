<template>
  <div class="add">
    <GlobalHeader></GlobalHeader>
    <GlobalMenu @navsData="navsDataHandle"></GlobalMenu>
    <IndexBanner></IndexBanner>
    <Recommendation></Recommendation>
    <ClassifyShop v-for="(item, key) in navsList" :item="item" :key="key"></ClassifyShop>
    <GlobalFooter></GlobalFooter>
    <GlobalSidebar></GlobalSidebar>
  </div>
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader.vue'
import GlobalMenu from '@/components/GlobalMenu.vue'
import IndexBanner from './components/IndexBanner'
import Recommendation from './components/Recommendation'
import ClassifyShop from './components/ClassifyShop'
import GlobalFooter from '@/components/GlobalFooter.vue'
import GlobalSidebar from '@/components/GlobalSidebar.vue'

export default {
  name: 'Index',
  components: { GlobalHeader, GlobalMenu, IndexBanner, Recommendation, ClassifyShop, GlobalFooter, GlobalSidebar },
  data() {
    return {
      navsList: [],
    }
  },
  methods: {
    /**
     * 分类数据
     */
    navsDataHandle(list) {
      this.navsList = list
    },
  },
}
</script>
<style lang="stylus">

</style>
