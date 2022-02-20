<template>
	<view class="base__status-bar">
		<slot></slot>
	</view>
</template>

<script></script>

<style lang="scss" scoped>
	$lg-status-bar-height: var(--status-bar-height);
.base__status-bar {
	height: $lg-status-bar-height;
	width: 100%;
}
</style>
