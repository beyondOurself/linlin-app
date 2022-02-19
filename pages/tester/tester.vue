<template>
	<lg-base-form border ref="formRef" :model="model" :config-list="configList"></lg-base-form>
	<button @click="test">测试</button>
	<!--  -->
	<uni-forms ref="formRef1" border v-model="model1" validate-trigger="bind" err-show-type="toast">
		<uni-forms-item required label="姓名" name="name"><uni-easyinput v-model="model1.name" trim type="text" /></uni-forms-item>
		<uni-forms-item required label="年级" name="age"><uni-easyinput v-model="model1.age" trim type="text" /></uni-forms-item>
	</uni-forms>
	<button @click="test2">测试2</button>
</template>
<script>
export default {
	data() {
		return {
			rules1: {
				name: {
					rules: [
						{
							required: true,
							errorMessage: '名称不能为空'
						}
					]
				}
			}
		};
	},
	onReady() {
		this.$refs.formRef1.setRules(this.rules1);
	}
};
</script>
<script setup>
import { ref, toRefs } from 'vue';
const props = defineProps({
	porpTest: {
		type: String,
		default: 'xxx'
	}
});

const model = ref({
	name: 'xxx',
	age: 89,
	password: '123'
});
const model1 = ref({
	name: 'xxx',
	age: 19
});

// 测试 表单校验方法

const formRef = ref(null);
const formRef1 = ref(null);

const test = () => {
	formRef.value.validator(() => {
		console.log(">>>")
	});
};
const test2 = () => {
	formRef1.value
		.validate()
		.then(res => {
			uni.hideLoading();
			console.log('表单数据信息：', res);
		})
		.catch(err => {
			uni.hideLoading();
			console.log('表单错误信息：', err);
		});
};

const configList = ref([
	{
		label: '姓名',
		prop: 'name'
	},
	{
		label: '密码',
		prop: 'password',
		type: 'password'
	}
]);
</script>
