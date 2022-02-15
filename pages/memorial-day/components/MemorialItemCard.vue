<template>
	<view class="item-card_wrap_box">
		<memorial-base-card>
			<slot></slot>
		</memorial-base-card>
	</view>
</template>

<script setup>
	import  MemorialBaseCard from './MemorialBaseCard.vue'
</script>

<style lang="scss" scoped>
	 .item-card_wrap_box{
		 margin-top: 25rpx;
	 }
</style>
