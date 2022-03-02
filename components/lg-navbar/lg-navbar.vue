<template>
	<view class="lg-navbar_wrap">
		<view class="navbar_box" :style="navbarStyleComputed">
			<view class="navbar__icon_wrap" @click="backTrigger">
				<view class="icon__body_wrap">
					<uni-icons type="left" size="25"></uni-icons>
				</view>
			    <view class="icon__title_wrap">
					{{title}}
				</view>
			</view>
			<view class="navbar__container_wrap">
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
	title:{
		type:String,
		default:'title'
	}
})
// 获取小程序胶囊高度
const { height: menuHeight, width: menuWidth , top:menuTop , bottom:menuBottom } = uni.getMenuButtonBoundingClientRect();
const padHeight = getApp().globalData.padHeight;
const navbarStyleComputed = computed(() => {
	return {
		height:`${menuHeight + padHeight}px`
	};
});

// 回退关闭页面

const backTrigger = () => {
	uni.navigateBack({
	})
}

</script>

<style lang="scss" scoped>
$lg-nav-bar-height: 44px;
$lg-border-color: #e5e5e5;
.lg-navbar_wrap {
	border-bottom: solid 1px $lg-border-color;
}
.navbar_box,.navbar__icon_wrap {
	display: flex;
	align-items: center;
}
.navbar__icon_wrap{
	padding-left: 10rpx;
}
.icon__title_wrap{
	font-weight: bold;
	font-size: 1.2em;
}
</style>
