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
import {navigatiorEmit , navigatiorGo} from '@/utils/uniapi/navigation.js'
	const { initEnumsAction } = useActions('enums', ['initEnumsAction']);
	const {displayModeList,displayModeMap}= useState('enums',['displayModeList','displayModeMap'])	
const testClick =  () => {
	navigatiorGo('interact')
	// uni.navigateTo({
	//   url: '/pages/memorial-day/memorial-day?id=1',
	//   events: {
	//     // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
	//     acceptDataFromOpenedPage: function(data) {
	//       console.log(data)
	//     },
	//     someEvent: function(data) {
	//       console.log(data)
	//     }
	//   },
	//   success: function(res) {
	//     // 通过eventChannel向被打开页面传送数据
	//     res.eventChannel.emit('acceptDataFromOpenedPage', { data: 'data from starter page' })
	//   }
	// })
	
};
</script>
<style lang="scss" scoped></style>
