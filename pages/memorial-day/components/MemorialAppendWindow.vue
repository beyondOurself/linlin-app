<template>
	<view class="memorial-append-window-wrap">
		<lg-popup ref="popupRef" type="bottom">
			<lg-card topRadius="25" @onClose="closeWindow" :title="title">
				<view class="window_container">
					<lg-form ref="formRef" border :model="model" :config-list="configList"></lg-form></view>
				<template #footer>
					<view class="window_footer">
						<view class="footer__reset-btn_wrap"><u-button plain color="#fb81a9" icon="pushpin" @click="reset">重置</u-button></view>
						<view class="footer__confirm-btn_wrap"><u-button plain color="#fb81a9" icon="checkbox-mark" @click="confirm">完成</u-button></view>
					</view>
				</template>
			</lg-card>
		</lg-popup>
	</view>
</template>

<script setup>
import { ref, watch, toRefs, nextTick } from 'vue';
const title = ref('添加纪念日')
const model = ref({
	name: '',
	calendarType: '',
	displayMode: '',
	reminderTime: '',
	
});

const configList = ref([
	{
		label: '名称',
		prop: 'name',
	},
	{
		label: '日历类型',
		prop: 'calendarType',
		type: 'radioTag',
		range: [
			{
				text: '公历',
				value: 0
			},
			{
				text: '农历',
				value: 1
			}
		]
	},
	{
		label: '显示方式',
		prop: 'displayMode',
		type: 'radioTag',
		range: [
			{
				text: '累计日',
				value: 0
			},
			{
				text: '倒数日',
				value: 1
			}
		]
	},
	{
		label: '提醒时间',
		prop: 'reminderTime',
		type: 'select',
		range: [
			{
				text: '不提醒',
				value: 0
			},
			{
				text: '当天',
				value: 1
			},
			{
				text: '提前1天',
				value: 2
			},
			{
				text: '提前3天',
				value: 3
			},
			{
				text: '提前一周',
				value: 4
			}
		]
	}
]);

// > 弹窗打开关闭
const popupRef = ref(null);
const open = () => {
	popupRef.value.open();
};
const close = () => {
	popupRef.value.close();
};

// > 弹窗表单

const formData = ref({
	name: '111',
	age: '0'
});

const submitForm = val => {
	console.log(val);
};

const closeWindow = () => {
	console.log('关闭弹窗');
	close();
};

// 表单

const formRef = ref(null);

const confirm = () => {
	formRef.value
		.validator()
		.then(res => {
			console.log('表单数据信息：', res);
		})
		.catch(err => {
			console.log('表单错误信息：', err);
		});
};

const reset = () => {
	formRef.value.reset();
};

// > expose
defineExpose({
	open,
	close
});
</script>

<style lang="scss" scoped>
.window_wrap {
	background-color: #fff;
	padding: 25px;
}
.window_container {
}
.window_footer {
	display: flex;
	justify-content: space-around;
}
.footer__confirm-btn_wrap,
.footer__reset-btn_wrap {
}
</style>
