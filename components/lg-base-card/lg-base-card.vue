<template>
	<view class="base-card_wrap" :style="cardStyler">
		<view class="card_header">
			
			<slot name="header">
				<view class="header-default_wrap">
					<slot name="header-title"><view class="header-default__title">这是标题</view></slot>
					<view class="header-default__icon" @click="clickHeaderIcon">
						<slot name="header-icon"><u-icon name="close-circle" size='18'></u-icon></slot>
					</view>
				</view>
			</slot>
		</view>
		<view class="card_container"><slot></slot></view>
		<view class="card_footer"><slot name="footer"></slot></view>
	</view>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
	type: {
		type: String,
		default: 'normal',
		validator: v => ['normal', 'circle'].includes(v)
	},
	borderRadius: {
		type: [String, Number],
		default: 0
	},
	topRadius: {
		type: [String, Number],
		default: 0
	},
	bottomRadius: {
		type: [String, Number],
		default: 0
	}
});

const emit = defineEmits(['on-close'])
const { topRadius, borderRadius, bottomRadius } = props;

const cardStyler = computed(() => {
	return {
		borderRadius: `${topRadius || borderRadius}rpx ${topRadius || borderRadius}rpx ${bottomRadius || borderRadius}rpx ${bottomRadius || borderRadius}rpx`
	};
});

// 标题按钮

const clickHeaderIcon = () => {
	
	emit('on-close')
	
}

</script>

<style lang="scss" scoped>
.base-card_wrap {
	background-color: white;
	padding: 25rpx;
	padding-top: 40rpx;
}

.header-default__title {
	text-align: center;
}
.header-default_wrap {
	position: relative;
}
.header-default__icon {
	position: absolute;
	right: -5rpx;
	top: -20rpx;
}
.card_container{
	margin: 30rpx 0;
}
</style>
