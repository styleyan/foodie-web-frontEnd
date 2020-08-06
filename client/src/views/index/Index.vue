<template>
  <div class="add">
    <GlobalHeader></GlobalHeader>
    <GlobalMenu></GlobalMenu>
  </div>
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader.vue'
import GlobalMenu from '@/components/GlobalMenu.vue'

export default {
  name: 'Index',
  components: { GlobalHeader, GlobalMenu },
  data() {
    return {}
  },
  methods: {
  },
}
</script>
<style lang="stylus">

</style>
