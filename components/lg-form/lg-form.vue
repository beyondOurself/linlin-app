<template>
	<uni-forms border :label-width="labelWidth" :label-position="labelPosition" :label-align="labelAlign" ref="formRef" v-model="model" validate-trigger="bind" err-show-type="toast" @validate="validate">
		<template v-for="({ label, prop, readonly, type ,range ,labelWidth,placeholder}, index) of configList" :key="index">
			<lg-form-item :labelWidth="labelWidth" :label="label" :prop="prop" :readonly="readonly" :type="type" :range="range" :placeholder='placeholderRebuild(type,placeholder)'></lg-form-item>
		</template>
	</uni-forms>
</template>
<script>
export default {
	name: 'LgBaseForm'
};
</script>
<script setup>
import { ref, unref, computed, toRefs, getCurrentInstance, nextTick, onMounted, useSlots, provide } from 'vue';

const props = defineProps({
	model: {
		type: Object,
		default: () => ({})
	},
	rules: {
		type: Object,
		default: () => ({})
	},
	readonly: {
		type: Boolean,
		default: false
	},
	border: {
		type: Boolean,
		default: false
	},
	labelWidth:{
		type:[String,Number],
		default:80
	},
	labelAlign:{
		type:String,
		default:'right',
		validator:v => (['left','center','right'].includes(v))
	},
	labelPosition:{
		type:String,
		default:'left',
		validator:v => (['left','top'].includes(v))
	},
	/**
	 * [
	 * 	{
	 *      label:'',
	 *      prop:'',
	 *		type:"
	 *			'text'|
	 *			'password'|
	 *			'number'|
	 *			'textarea'|
	 *			'radio'|
	 *			'radioList'|
	 *			'radioButton'|
	 *			'radioTage'|
	 *			'checkbox'|
	 *			'date'|
	 *			'dateRange'|
	 *			'datetime'|
	 *			'datetimeRange'|
	 *			'combox'|
	 *			'data-picker'
	 *		",
	 * 		errorMessage:'',
	 * 		readonly: false
	 * 		validateFunction: () => {},
	 * 		placeholder:''
	 *
	 * 	}
	 * ]
	 *
	 *
	 */
	configList: {
		type: Array,
		default: () => []
	}
});

const { configList } = props;
const formRef = ref(null);
// provide 当前实例对象
provide('formProps', props);

// 表单校验
const validate = res => {
	// console.log(res)
};
const validator = () => {
	return formRef.value.validate()
}
const validatorCallback = (actuator,unvalidate = []) => {
	formRef.value.validate(unvalidates, (err, formData) => {
		if (!err) {
			console.log('success', formData);
			actuator()
		}
		uni.hideLoading();
	});
};
//重置表单
const reset = () => {
	formRef.value.resetFields();
};
// 清除表单效果
const clearValidate = () => {
	formRef.value.clearValidate();
};

// 设置 rules
const configRulesGet = computed(() => {
	let configRules = {};
	for (let { label = '', prop = '', errorMessage = '', validateFunction = () => true, rules = [] } of unref(configList)) {
		configRules[prop] = {
			rules: [
				{
					required: true,
					errorMessage: errorMessage || `${label}为必填项`
				},
				{
					validateFunction
				},
				...rules
			]
		};
	}

	return configRules;
});

onMounted(() => {
	formRef.value.setRules(unref(configRulesGet));
});

const placeholderRebuild = (type,placeholder) => {
	 
	 if(!placeholder){
		 switch (type){
		 	case 'select':
			placeholder = '请选择'
				break;
		 	default:
		 		break;
		 }
	 }
	return placeholder
}

// 测试

// 导出反复
defineExpose({
	validatorCallback,
	validator,
	reset
});
</script>

<style></style>
