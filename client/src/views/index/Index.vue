<template>
  <div class="add">
    <GlobalHeader></GlobalHeader>
    <GlobalMenu></GlobalMenu>
    <IndexBanner></IndexBanner>
  </div>
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader.vue'
import GlobalMenu from '@/components/GlobalMenu.vue'
import IndexBanner from './components/IndexBanner'

export default {
  name: 'Index',
  components: { GlobalHeader, GlobalMenu, IndexBanner },
  data() {
    return {}
  },
  methods: {
  },
}
</script>
<style lang="stylus">

</style>
