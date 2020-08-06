<template>
  <div class="add">
    <GlobalHeader></GlobalHeader>
    <GlobalMenu></GlobalMenu>
    <IndexBanner></IndexBanner>
    <Recommendation></Recommendation>
  </div>
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader.vue'
import GlobalMenu from '@/components/GlobalMenu.vue'
import IndexBanner from './components/IndexBanner'
import Recommendation from './components/Recommendation'

export default {
  name: 'Index',
  components: { GlobalHeader, GlobalMenu, IndexBanner, Recommendation },
  data() {
    return {}
  },
  methods: {
  },
}
</script>
<style lang="stylus">

</style>
