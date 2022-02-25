<template>
	<view class="lg-select_wrap">
		<view class="select__panel_wrap" @click="open()">
			<view class="panel__title_wrap">
				<input disabled :value="activeSelectComputed" class="input_body" type="text" placeholder-class="placeholder-class" :placeholder="placeholder" />
			</view>
			<view class="panel__icon_wrap"><uni-icons type="bottom"></uni-icons></view>
		</view>
		<lg-popup ref="popupRef" type="bottom">
			<lg-card v-if="visible" topRadius="25" @onClose="close()" :title="activeTitleComputed">
				<view class="select__body_wrap">
					<picker-view :indicator-class="indicatorClass" :value="valueComputed" @change="bindChange" class="picker-view">
						<picker-view-column>
							<view class="item" v-for="(item, index) in range" :key="index">{{ item.text }}</view>
						</picker-view-column>
					</picker-view>
				</view>
				<template #footer>
					<view class="select__operators_wrap">
						<slot name="operator">
							<lg-button plain @onClick="cancleClick">取消</lg-button>
							<lg-button @onClick="confirmClick">确定</lg-button>
						</slot>
					</view>
				</template>
			</lg-card>
		</lg-popup>
	</view>
</template>

<script>
export default {
	name: 'LgSelect'
};
</script>
<script setup>
import { ref, computed, toRefs, watch, unref } from 'vue';

const props = defineProps({
	modelValue: {
		type: [String, Number],
		default: ''
	},
	range: {
		type: Array,
		default: () => []
	},
	placeholder:{
		type:String,
		default:''
	}
});
const { modelValue, range } = toRefs(props);

const emit = defineEmits(['update:modelValue']);
const valueComputed = computed({
	get: v => {
		const rangeVal = unref(range);
		const modelVal = unref(modelValue);
		const index = rangeVal.findIndex(fi => {
			return fi.value == modelVal;
		});
		return [index];
	},
	set: v => {}
});

const name = ref('');
const visible = ref(false);
const indicatorClass = computed(() => {
	return ['indicator_wrap'];
});
const title = ref('');
const activeRangeItem = ref({});
const bindChange = e => {
	const val = e.detail.value;
	activeRangeItem.value = range.value[val[0]];
	title.value = activeRangeItem.value.text;
};

const cancleClick = () => {
	close();
};
const activeSelectComputed = computed(() => {
	const curVal = modelValue.value;
	const curModelFinder = range.value.find(fi => fi.value == curVal);
	return curModelFinder ? curModelFinder.text : '';
});

const activeTitleComputed = computed(() => {
	const curText = title.value || activeSelectComputed
	return  unref(curText) || '--.--'
})
const confirmClick = () => {
	emit('update:modelValue', activeRangeItem.value.value);
	setTimeout(() => {
	  close()
	}, 100);
};

const popupRef = ref(null);
const open = item => {
	visible.value = true
	popupRef.value.open();
};
const close = () => {
	popupRef.value.close();
	visible.value = false
};

defineExpose({
	open,
	close
});
</script>

<style lang="scss">
.lg-select_wrap {
	.picker-view {
		width: 700rpx;
		height: 400rpx;
	}
	.item {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.indicator_wrap {
		// background-color: green;
	}
	.select__operators_wrap {
		display: flex;
		justify-content: space-around;
	}
	.select__panel_wrap {
		border-style: solid;
		border-color: $lg-border-color;
		border-width: thin;
		display: flex;
		justify-content: space-between;
		padding: 7px 20rpx;
		border-radius:$uni-border-radius-lg;
	}
	.panel__title_wrap {
		width: 100%;
	}
	.panel__icon_wrap {
		flex-basis: 18px;
	}
	.input_body {
	}
	.placeholder-class {
		// font-size: 0.8em;
	}
}
</style>
