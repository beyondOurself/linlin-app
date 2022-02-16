<template>
	  <view class="float-button_wrap_box">
	  	<u-button type="primary" icon="plus" shape='circle' color='#fb81a9'
		 @click="$emit('onClick')"
		 ></u-button>
	  </view>
</template>

<script setup>
	import {ref} from 'vue'
	const x = ref(0)
	const y = ref(0)
	const onChange = ()=> {
		 console.log('changing')
	}
</script>

<style lang="scss" scoped>
	.float-button_wrap_box{
		height: 100rpx;
		width: 100rpx;
	}
</style>
