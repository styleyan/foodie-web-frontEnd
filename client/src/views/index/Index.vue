<template>
  <div class="add">
    <GlobalHeader></GlobalHeader>
    <GlobalMenu></GlobalMenu>
    <IndexBanner></IndexBanner>
    <Recommendation></Recommendation>
    <ClassifyShop v-for="(item, key) in [1,2,3,4,5,6,7,8,9,10]" :key="key"></ClassifyShop>
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
    return {}
  },
  methods: {
  },
}
</script>
<style lang="stylus">

</style>
