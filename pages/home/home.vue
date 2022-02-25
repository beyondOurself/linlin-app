<template>
	<lg-container title="首页" isCustom>
		{{displayModeList}}
		{{displayModeMap}}
		<!-- <home-head-card></home-head-card>
		<home-operatives></home-operatives>
	<view class="">
		<button @click="open">打开弹窗</button>
			<uni-popup ref="popup" type="bottom" backgroundColor="#fff">底部弹出 Popup</uni-popup>
	</view> -->

		<lg-button @onClick="testClick">测试</lg-button>
	</lg-container>
</template>
<script>
export default {
	methods: {
		open() {
			console.log('>>>>>');
			this.$refs.popup.open('bottom');
		}
	}
};
</script>
<script setup>
import { ref } from 'vue';
import { mapActions, useStore } from 'vuex';
import HomeHeadCard from './components/HomeHeadCard.vue';
import HomeOperatives from './components/HomeOperatives.vue';
import * as exportsModel from '@/utils/common/index.js';
import { useActions , useState} from '@/utils/vuex/index.js';
	const { initEnumsAction } = useActions('enums', ['initEnumsAction']);
	const {displayModeList,displayModeMap}= useState('enums',['displayModeList','displayModeMap'])
const testClick =  () => {
	// initEnumsAction()
	console.log('displayModeList',displayModeList)
	console.log('displayModeMap',displayModeMap)
	
};
</script>
<style lang="scss" scoped></style>
