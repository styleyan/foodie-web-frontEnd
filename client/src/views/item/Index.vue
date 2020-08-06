<template>
	<div class="item-page">
		<GlobalHeader></GlobalHeader>
    <GlobalMenu :isHideClassify="true" redText="商品详情"></GlobalMenu>
		<div class="item-content">
			
		</div>
		<GlobalFooter></GlobalFooter>
    <GlobalSidebar></GlobalSidebar>
	</div>
</template>
<script>
import GlobalHeader from '@/components/GlobalHeader.vue'
import GlobalMenu from '@/components/GlobalMenu.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'
import GlobalSidebar from '@/components/GlobalSidebar.vue'

export default {
	name: 'Item',
	components: { GlobalHeader, GlobalMenu, GlobalFooter, GlobalSidebar },
  data() {
    return {
			
		}
	},
	methods: {
		
	},
}
</script>
<style lang="stylus">
.item-page{
	.item-content{
		width 1200px
		margin 0 auto
	}
}
</style>