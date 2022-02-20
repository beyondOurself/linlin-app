
<template>
	<lg-container title="首页" isCustom>
		<home-head-card></home-head-card>
		<home-operatives></home-operatives>
	<view class="">
		<button @click="open">打开弹窗</button>
			<uni-popup ref="popup" type="bottom" backgroundColor="#fff">底部弹出 Popup</uni-popup>
	</view>
	</lg-container>

	
</template>
<script>
	export default {
		methods:{
			open(){
				console.log(">>>>>");
				 this.$refs.popup.open('bottom')
			}
		}
	}
</script>
<script setup>
import { ref } from 'vue'
import HomeHeadCard from './components/HomeHeadCard.vue'
import HomeOperatives from './components/HomeOperatives.vue'

const status = ref(false)
const closeTest = () => {
	status.value = false
}
</script>
<style lang="scss" scoped>


</style>
