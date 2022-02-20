<template>
	<view class="header-card_box">
		<view class="duration_wrap">
			  <view class="duration__slogan">
				  我们已经相爱
			  </view> 
			  <view class="duration__count">
				  1314天
			  </view>
		</view>
		<view class="avatar_wrap"><lg-avatar></lg-avatar></view>
	</view>
</template>

<script setup>
</script>

<style lang="scss" scoped>
	.duration_wrap,.avatar_wrap{
		display: inline-block;
	}
	.duration_wrap{
		margin-right: 24rpx;
		text-align: center;
	}
	.duration__slogan{
		font-size: 0.9em;
		margin-bottom: 8rpx;
	}
	.duration__count{
		font-weight: bold;
	}
.header-card_box {
	position: relative;
	margin: 30rpx;
	padding: 24rpx;
	border-radius: 5px;
	background: rgba(255, 255, 255, 0.3);
	box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, 0.1);
	border-radius: 4px 24px 24px 4px;
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
		margin: -30px;
	}
}
</style>
