<template>
	<view class="item-card_wrap_box" @click="clickTrigger">
		<memorial-base-card>
			<slot></slot>
		</memorial-base-card>
	</view>
</template>

<script setup>
	import  MemorialBaseCard from './MemorialBaseCard.vue'
	const emit = defineEmits(['on-click'])
	const clickTrigger = () => {
		 emit('on-click')
	}
</script>

<style lang="scss" scoped>
	 .item-card_wrap_box{
		 margin-top: 25rpx;
	 }
</style>

