<template>
	<view class="base__tabbar">
		<slot></slot>
	</view>
</template>

<script></script>

<style lang="scss" scoped>
$lg-tab-bar-height: 55px;
.base__tabbar {
	height: $lg-tab-bar-height;
	width: 100%;
}
</style>
