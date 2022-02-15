<template>
	<view class="base-card_wrap_box">
		<lg-base-ground-glass>
			<view class="card_wrap">
			<slot></slot>
			</view>
		</lg-base-ground-glass>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.base-card_wrap_box{
		box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, 0.2);
		border-radius: $uni-border-radius-lg;
	}
	.card_wrap{
		padding: 20rpx;
	}
</style>
