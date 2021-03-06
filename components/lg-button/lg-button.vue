<template>
	<view class="lg-button_wrap">
		<button
			class="button_body_wrap"
			type="default"
			:loading="loading"
			:style="bodyStyle"
			:class="bodyClass"
			:size="size"
			:plain="plain"
			:disabled="disabled"
			@click="clickTrigger"
		>
			<view class="button-icon_box" :class="iconClass" v-if="!loading">
				<uni-icons class="button-icon_body" :customPrefix="iconPrefix" :color="iconColor" :type="icon" :size="iconSize"></uni-icons>
			</view>
				<slot></slot>
		</button>
	</view>
</template>

<script setup>
import { computed, toRefs, unref } from 'vue';
const props = defineProps({
	disabled: {
		type: Boolean,
		default: false
	},
	plain: {
		type: Boolean,
		default: false
	},
	loading: {
		type: Boolean,
		default: false
	},
	circle: {
		type: Boolean,
		default: false
	},
	url: {
		type: String,
		default: ''
	},
	size: {
		type: String,
		default: 'mini',
		validator: v => ['default', 'mini'].includes(v)
	},
	color: {
		type: String,
		default: '#fb81a9'
	},
	url: {
		type: String,
		default: ''
	},
	iconPrefix: {
		type: String,
		default: ''
	},
	iconColor: {
		type: String,
		default: ''
	},
	icon: {
		type: String,
		default: ''
	},
	iconSize: {
		type: String,
		default: ''
	}
});

const { plain, color, url, icon ,circle} = toRefs(props);

const emit = defineEmits(['on-click']);

const bodyClass = computed(() => {
	return [unref(plain) ? 'button_body_wrap--plain' : 'button_body_wrap--default'];
});

const iconClass = computed(() => {
	return [
		{
			'button-icon_box--limit': icon.value
		}
	];
});

const bodyStyle = computed(() => {
	const plainValue = unref(plain);
	const colorValue = unref(color);
	const defaultColor = '#fff';
	const styleModel = {
		color: '', // 字体颜色
		borderColor: '', // 边框颜色
		backgroundColor: '' // 背景颜色
	};

	if (plainValue) {
		styleModel.color = colorValue;
		styleModel.borderColor = colorValue;
	} else {
		styleModel.color = defaultColor;
		styleModel.backgroundColor = colorValue;
	}

	return styleModel;
});

const clickTrigger = () => {
	const urlValue = unref(url);
	if (urlValue) {
		uni.navigateTo({
			url: urlValue
		});
	} else {
		emit('on-click');
	}
};
</script>

<style lang="scss">
.lg-button_wrap {
	.button_body_wrap--default {
		background-color: $lg-color-primary;
		color: #fff;
	}

	.button_body_wrap--plain {
		color: $lg-color-primary;
		border-color: $lg-color-primary;
	}
	.button-icon_box {
		display: inline-block;
	}
	.button-icon_box--limit {
		min-width: 18px;
	}
	.button-icon_body {
	}
}
</style>
