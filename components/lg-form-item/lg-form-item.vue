<template >
	<view class="base-form-item_wrap">
		<uni-forms-item  :required="!readonlyComputed" :label-width="labelWidth"  :label="labelComputed" :name="prop">
			<template v-if="readonlyComputed">
				<view class="readonly_wrap">{{ propComputed }}</view>
			</template>
			<template v-else>
				<template v-if="type == 'text'">
					<uni-easyinput v-model="propComputed" trim type="text" :inputBorder="border" :placeholder="placeholder" />
				</template>
				<template v-if="type == 'password'">
					<uni-easyinput v-model="propComputed" trim type="password" :inputBorder="border" :placeholder="placeholder" />
				</template>
				<template v-if="type == 'number'">
					<uni-easyinput v-model="propComputed" trim type="number" :inputBorder="border" :placeholder="placeholder" />
				</template>
				<template v-if="type == 'textarea'">
					<uni-easyinput v-model="propComputed" autoHeight trim type="textarea" :inputBorder="border" :placeholder="placeholder" />
				</template>
				<template v-if="type == 'radio'">
					<uni-data-checkbox v-model="propComputed" :localdata="range"></uni-data-checkbox>
				</template>
				<template v-if="type == 'radioList'">
					<uni-data-checkbox v-model="propComputed" mode="list" :localdata="range"></uni-data-checkbox>
				</template>
				<template v-if="type == 'radioButton'">
					<uni-data-checkbox v-model="propComputed" mode="button" :localdata="range"></uni-data-checkbox>
				</template>
				<template v-if="type == 'radioTag'">
					<uni-data-checkbox v-model="propComputed" mode="tag" :localdata="range"></uni-data-checkbox>
				</template>
				<template v-if="type == 'checkbox'">
					<uni-data-checkbox v-model="propComputed" multiple mode="tag" :localdata="range"></uni-data-checkbox>
				</template>
				<template v-if="type == 'date'">
					<uni-datetime-picker v-model="propComputed" type="date" :border="border" />
				</template>
				<template v-if="type == 'dateRange'">
					<uni-datetime-picker v-model="propComputed" type="daterange" :border="border" />
				</template>
				<template v-if="type == 'datetime'">
					<uni-datetime-picker v-model="propComputed" type="datetime" :border="border" />
				</template>
				<template v-if="type == 'datetimeRange'">
					<uni-datetime-picker v-model="propComputed" type="datetimeRange" :border="border" />
				</template>
				<template v-if="type == 'combox'">
					<uni-combox v-model="propComputed" :border="border" :candidates="range" :placeholder="placeholder"></uni-combox>
				</template>
				<template v-if="type == 'select'">
					<uni-data-picker propComputed :border="border" :localdata="range" :popup-title="`选择${label}`"></uni-data-picker>
				</template>
			</template>
		</uni-forms-item>
	</view>
</template>

<script setup>
import { computed, toRefs, inject } from 'vue';
const props = defineProps({
	type: {
		type: String,
		default: 'text',
		validator: v =>
			[
				'text',
				'password',
				'number',
				'textarea',
				'radio',
				'radioList',
				'radioButton',
				'radioTag',
				'checkbox',
				'date',
				'dateRange',
				'datetime',
				'datetimeRange',
				'combox',
				'select'
			].includes(v)
	},
	label: {
		type: String,
		default: ''
	},
	labelWidth:{
		type:[String,Number],
		default:''
	},
	prop: {
		type: String,
		default: ''
	},
	placeholder: {
		type: String,
		default: '请输入'
	},
	/**
	 * candidates  :  ['','']
	 * radio | checkbox : [{text:'',value:''}]
	 * dataPicker : [{text:'' , value : '' , children:{ text :'',value:''}}]
	 **/
	range: {
		type: Array,
		default: () => [
			{
				text: 'text',
				value: 'value'
			}
		]
	},
	readonly: {
		type: Boolean,
		default: false
	},
});

const { prop, label, readonly: curReadonly ,labelWidth} = toRefs(props);

// 父组件覆盖掉当前
const { model, readonly ,border} = toRefs(inject('formProps'));

const readonlyComputed = computed(() => {
	return curReadonly.value || readonly.value;
});

const labelComputed = computed(() => {
	const labelVal = label.value;
	return labelVal ? `${labelVal} :` : 'label';
});
// propComputed >>>
const propVal = prop.value;
const modelVal = model.value;
const propComputed = computed({
	get: () => {
		return modelVal[propVal];
	},
	set: val => {
		modelVal[propVal] = val;
	}
});
</script>

<script>
export default {
	name: 'LgBaseFormItem',
	data() {
		return {};
	}
};
</script>

<style lang="scss"   >

.base-form-item_wrap{
	// border-bottom: solid 1px red;
	.readonly_wrap{
		height: 100%;
		display: flex;
		align-items: center;
	}
	
	
}
	
</style>
