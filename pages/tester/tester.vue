<template>
	<view>
		{{ $store.getters['nums/displayModeGet'] }} =======
		<lg-button @onClick="testClick">测试</lg-button>
	</view>
</template>

<script>
import { mapState,mapGetters } from 'vuex';
export default {
	computed: {
		// ...mapGetters({
		// 	userInfo: 'user/info',
		// 	hasLogin: 'user/hasLogin',
		// 	displayModeGet:'enums/displayModeGet'
		// })
	},
	mounted() {
		// console.log("info",this.userInfo)
		// console.log("info",this.displayModeGet[0])
	}
};

</script>

<script setup>
  	 import { useGetters ,useState } from "@/utils/vuex/index.js"
	  const { info } = useGetters('user',['info'])
	  const { displayModeMapGet,displayModeListGet } = useGetters('enums',['displayModeMapGet','displayModeListGet'])
	  const { displayModeList} = useState('enums',['displayModeList'])
  const testClick = () => {
	  // console.log('info',info.value.nickname)
	  // console.log(displayModeListGet.value[0])
	  console.log(displayModeList.value)
  }
 
</script>

<style lang="scss">
.picker-view {
	width: 750rpx;
	height: 600rpx;
	margin-top: 5rpx;
}
.item {
	height: 100px;
	align-items: center;
	justify-content: center;
	text-align: center;
}
</style>
