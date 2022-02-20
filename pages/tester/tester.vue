<template>
	<view>
	<!-- 按钮 -->
	<lg-button :loading="loading"  @onClick='btnClick' >愚蠢的地球人</lg-button>
	
	<button type="primary" plain="true">按钮</button>
		<button type="primary" disabled="true" plain="true">不可点击的按钮</button>
		<button type="default" plain="true">按钮</button>
		<button type="default" disabled="true" plain="true">按钮</button>
		<button class="mini-btn" type="primary" size="mini">按钮</button>
		<button class="mini-btn" type="default" size="mini">按钮</button>
		<button class="mini-btn" type="warn" size="mini">按钮</button>
	<!-- 表单 -->
	<!-- <lg-form  ref="formRef" :model="model"  :config-list="configList"></lg-form>
	<button @click="test">测试</button>
	<uni-forms ref="formRef1" border v-model="model1" validate-trigger="bind" err-show-type="toast">
		<uni-forms-item required label="姓名" name="name"><uni-easyinput v-model="model1.name" trim type="text" /></uni-forms-item>
		<uni-forms-item required label="年级" name="age"><uni-easyinput v-model="model1.age" trim type="text" /></uni-forms-item>
	</uni-forms>
	<button @click="test2">测试2</button> -->
	</view>
</template>
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
// 测试按钮
const loading = ref(false)
const btnClick = () => {
	loading.value = true
	console.log('点击了')
	setTimeout(() => {
		loading.value = false
	},3000)
}


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
	},
	{
		label: '性别',
		prop: 'gende',
		type: 'radio',
		range:[
			{
				text:'男',
				value:1
			},
			{
				text:'女',
				value:0
			}
		]
	},
	{
		label: '爱好',
		prop: 'hobby',
		type: 'checkbox',
		range:[
			{
				text:'足球',
				value:0
			},
			{
				text:'篮球',
				value:1
			},
			{
				text:'养鱼',
				value:2
			},
		]
	},
	{
		label:'结婚日期',
		prop:'weddingDay',
		type:'date'
	}
]);
</script>
