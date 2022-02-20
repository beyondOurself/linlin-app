<template>
	<view class="ground-glass_wrap_box">
		<slot></slot>
	</view>
</template>

<script setup>
</script>

<style lang="scss" scoped>
	.ground-glass_wrap_box{
		position: relative;
		background: rgba(255, 255, 255, 0.3);
		overflow: hidden;
		&::before {
			content: '';
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			filter: blur(20px);
			z-index: -1;
			
		}
	}
</style>
