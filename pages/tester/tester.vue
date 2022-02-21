<template>
	<view>
		selectModel = {{ selectModel }}
		<lg-select ref="selectRef" v-model="selectModel.name" :range="selectRange"></lg-select>
		<lg-button @onClick="testClick">测试</lg-button>
		<!-- <view class="uni-padding-wrap">
			<view class="uni-title">日期：{{ year }}年{{ month }}月{{ day }}日</view>
		</view>
		<picker-view v-if="visible" :indicator-style="indicatorStyle" :value="[1]" @change="bindChange" class="picker-view">
			<picker-view-column>
				<view class="item" v-for="(item, index) in years" :key="index">{{ item }}年</view>
			</picker-view-column>
			<picker-view-column>
				<view class="item" v-for="(item, index) in months" :key="index">{{ item }}月</view>
			</picker-view-column>
			<picker-view-column>
				<view class="item" v-for="(item, index) in days" :key="index">{{ item }}日</view>
			</picker-view-column>
		</picker-view> -->
		<!-- 圆形按钮 -->
		<!-- <lg-circle-button>
		
	</lg-circle-button> -->
		<!-- 按钮 -->
		<!-- <lg-button circle icon="plusempty" :loading="loading"  @onClick='btnClick' >愚蠢的地球人</lg-button>
	
	<button type="primary" plain="true">按钮</button>
		<button type="primary" disabled="true" plain="true">不可点击的按钮</button>
		<button type="default" plain="true">按钮</button>
		<button type="default" disabled="true" plain="true">按钮</button>
		<button class="mini-btn" type="primary" size="mini">按钮</button>
		<button class="mini-btn" type="default" size="mini">按钮</button>
		<button class="mini-btn" type="warn" size="mini">按钮</button> -->
		<!-- 表单 -->
		<!-- <lg-form  ref="formRef" :model="model"  :config-list="configList"></lg-form>
	<button @click="test">测试</button>-->
	<uni-forms ref="formRef1" border v-model="model1" validate-trigger="bind" err-show-type="toast">
		<uni-forms-item required label="姓名" name="name"><uni-easyinput placeholder="xxx" v-model="model1.name" trim type="text" /></uni-forms-item>
		<uni-forms-item required label="年级" name="age"><uni-easyinput v-model="model1.age" trim type="text" /></uni-forms-item>
	</uni-forms>
	<button @click="test2">测试2</button> 
	</view>
</template>

<script>
export default {
	data: function() {
		const date = new Date();
		const years = [];
		const year = date.getFullYear();
		const months = [];
		const month = date.getMonth() + 1;
		const days = [];
		const day = date.getDate();
		for (let i = 1990; i <= date.getFullYear(); i++) {
			years.push(i);
		}
		for (let i = 1; i <= 12; i++) {
			months.push(i);
		}
		for (let i = 1; i <= 31; i++) {
			days.push(i);
		}
		return {
			title: 'picker-view',
			years,
			year,
			months,
			month,
			days,
			day,
			value: [0, month - 1, day - 1],
			visible: true,
			indicatorStyle: `height: 50px;`
		};
	},
	methods: {
		bindChange: function(e) {
			const val = e.detail.value;
			console.log(val);
			this.year = this.years[val[0]];
			this.month = this.months[val[1]];
			this.day = this.days[val[2]];
		}
	}
};
</script>
<script setup>
import { ref, toRefs, watch } from 'vue';
const props = defineProps({
	porpTest: {
		type: String,
		default: 'xxx'
	}
});

// 测试  自定义事件
const selectRange = ref([
	{
		text: '狗娃',
		value: 'gouwa'
	},
	{
		text: '狗蛋',
		value: 'goudan'
	},
	{
		text: '狗剩',
		value: 'goshen'
	}
]);
const selectRef = ref(null);
const testClick = () => {
	selectRef.value.open();
};
const selectModel = ref({
	name: 'goudan'
});
const selectList = ref('goudan');
watch(
	selectModel,
	val => {
		console.log('selectList watching ...', val);
	},
	{
		deep: true
	}
);
//
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
const loading = ref(false);
const btnClick = () => {
	loading.value = true;
	console.log('点击了');
	setTimeout(() => {
		loading.value = false;
	}, 3000);
};

// 测试 表单校验方法

const formRef = ref(null);
const formRef1 = ref(null);

const test = () => {
	formRef.value.validator(() => {
		console.log('>>>');
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
		range: [
			{
				text: '男',
				value: 1
			},
			{
				text: '女',
				value: 0
			}
		]
	},
	{
		label: '爱好',
		prop: 'hobby',
		type: 'checkbox',
		range: [
			{
				text: '足球',
				value: 0
			},
			{
				text: '篮球',
				value: 1
			},
			{
				text: '养鱼',
				value: 2
			}
		]
	},
	{
		label: '结婚日期',
		prop: 'weddingDay',
		type: 'date'
	}
]);
</script>
<style lang="scss">
.picker-view {
	width: 750rpx;
	height: 600rpx;
	margin-top: 5rpx;
}
.item {
	height: 100px;
	align-items: center;
	justify-content: center;
	text-align: center;
}
</style>
