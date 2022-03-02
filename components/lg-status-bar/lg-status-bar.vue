<template>
	<view class="lg__status-bar_wrap">
		<view class="status-bar_box" :style="boxStyleComputed"><slot></slot></view>
	</view>
</template>

<script setup>
import { computed } from 'vue';
const { height: menuHeight, width: menuWidth, top: menuTop, bottom: menuBottom } = uni.getMenuButtonBoundingClientRect();

const boxStyleComputed = computed(() => ({
	height:`${menuTop}px`
}));
</script>

<style lang="scss" scoped>
	.lg__status-bar_wrap{
	}
</style>
