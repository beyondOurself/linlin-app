<template>
	<view class="circle-button_wrap" @click="clickTrigger">
		<view class="button_box">
			<uni-icons class="button_body" :color="color" size="25"   :type="icon"></uni-icons></view>
	</view>
</template>

<script setup>
const props = defineProps({
	color:{
		type:String,
		default:'#fff'
	},
	icon:{
		type:String,
		default:'plusempty'
	}
})
const emit = defineEmits(['on-click'])
const clickTrigger = () => {
	emit('on-click')
}

</script>

<style lang="scss">
.circle-button_wrap {
	.button_box {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		background-color: $lg-color-primary;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		&:active{
			background-color:#d07996;
		}
	}
	.button_body{
		font-weight: bold;
	}
}
</style>
