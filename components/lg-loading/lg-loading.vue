<template>
	<view class="lg-loading_wrap" v-show="offon">
		<view class="loading__mask_box">
			<view class="loading__container_box">
				<view class="container__pillar-item"></view>
				<view class="container__pillar-item"></view>
				<view class="container__pillar-item"></view>
				<view class="container__pillar-item"></view>
				<view class="container__pillar-item"></view>
				<view class="container__pillar-item"></view>
				<view class="container__pillar-item"></view>
				<view class="container__pillar-item"></view>
				<view class="container__pillar-item"></view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'LoadingLove',
	data() {
		return {};
	}
};
</script>

<script setup>
	
	const props = defineProps({
		offon:{
			type:Boolean,
			default:false
		}
	})
	
</script>

<style lang="scss" scoped>
.loading__mask_box {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 2;
	background-color: rgba(0, 0, 0, 0.1);
	filter: blur();
}
.loading__container_box {
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-flow: row nowrap;
}

.container__pillar-item {
	background: linear-gradient(to bottom, #fb81a9, #ff9ebd);
	width: 16rpx;
	height: 16rpx;
	border-radius: 20rpx;
	margin-right: 10rpx;
}

.container__pillar-item:nth-child(1) {
	animation: love1 2s infinite;
}

.container__pillar-item:nth-child(2) {
	animation: love2 2s infinite;
	animation-delay: 0.15s;
}

.container__pillar-item:nth-child(3) {
	animation: love3 2s infinite;
	animation-delay: 0.3s;
}

.container__pillar-item:nth-child(4) {
	animation: love4 2s infinite;
	animation-delay: 0.45s;
}

.container__pillar-item:nth-child(5) {
	animation: love5 2s infinite;
	animation-delay: 0.6s;
}

.container__pillar-item:nth-child(6) {
	animation: love4 2s infinite;
	animation-delay: 0.75s;
}

.container__pillar-item:nth-child(7) {
	animation: love3 2s infinite;
	animation-delay: 0.9s;
}

.container__pillar-item:nth-child(8) {
	animation: love2 2s infinite;
	animation-delay: 1.05s;
}

.container__pillar-item:nth-child(9) {
	animation: love1 2s infinite;
	animation-delay: 1.2s;
}

@keyframes love1 {
	30%,
	50% {
		height: 50rpx;
		transform: translateY(-20rpx);
	}

	75%,
	100% {
		height: 20rpx;
		transform: translateY(0);
	}
}

@keyframes love2 {
	30%,
	50% {
		height: 90rpx;
		transform: translateY(-25rpx);
	}

	75%,
	100% {
		height: 20rpx;
		transform: translateY(0);
	}
}

@keyframes love3 {
	30%,
	50% {
		height: 120rpx;
		transform: translateY(-20rpx);
	}

	75%,
	100% {
		height: 20rpx;
		transform: translateY(0);
	}
}

@keyframes love4 {
	30%,
	50% {
		height: 130rpx;
		transform: translateY(-10rpx);
	}

	75%,
	100% {
		height: 20rpx;
		transform: translateY(0);
	}
}

@keyframes love5 {
	30%,
	50% {
		height: 130rpx;
		transform: translateY(10rpx);
	}

	75%,
	100% {
		height: 20rpx;
		transform: translateY(0);
	}
}
</style>
