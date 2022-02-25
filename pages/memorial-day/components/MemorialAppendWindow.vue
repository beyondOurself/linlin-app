<template>
	<view class="memorial-append-window-wrap">
		<lg-popup ref="popupRef" type="bottom">
			<lg-card v-if="visible" topRadius="25" @onClose="closeWindow" :title="title">
				<view class="window_container"><lg-form ref="formRef" border :model="model" :config-list="configList"></lg-form></view>
				<template #footer>
					<view class="window_footer">
						<view class="footer__reset-btn_wrap"><lg-button @onClick="reset">重置</lg-button></view>
						<view class="footer__confirm-btn_wrap"><lg-button @onClick="confirm">完成</lg-button></view>
					</view>
				</template>
			</lg-card>
		</lg-popup>
	</view>
</template>

<script setup>
import { ref, watch, toRefs, nextTick, computed, onMounted } from 'vue';
import { useState, useGetters, useActions } from '@/utils/vuex/index.js';
const { calendarTypeMapGet, remindWayMapGet, displayModeMapGet, displayModeListGet, remindWayListGet, calendarTypeListGet } = useGetters('enums', [
	'calendarTypeMapGet',
	'remindWayMapGet',
	'displayModeMapGet',
	'displayModeListGet',
	'remindWayListGet',
	'calendarTypeListGet'
]);
const emit = defineEmits(['on-confirm']);
const title = ref('添加纪念日');
const model = ref({
	name: '',
	calendarTypeCode: '',
	displayModeCode: '',
	reminderTimeCode: '00',
	memorialDatetime: ''
});

const configList = ref([
	{
		label: '名称',
		prop: 'name'
	},
	{
		label: '日历类型',
		prop: 'calendarTypeCode',
		type: 'radioTag',
		range: calendarTypeListGet
	},
	{
		label: '纪念日期',
		prop: 'memorialDatetime',
		type: 'date'
	},
	{
		label: '显示方式',
		prop: 'displayModeCode',
		type: 'radioTag',
		range: displayModeListGet
	},
	{
		label: '提醒时间',
		prop: 'reminderTimeCode',
		type: 'select',
		range: remindWayListGet
	}
]);

// > 弹窗打开关闭
const popupRef = ref(null);
const visible = ref(false);
const open = item => {
	visible.value = true;
	if (item) {
		model.value = item;
	}
	popupRef.value.open();
};
const close = () => {
	popupRef.value.close();
	model.value = {};
	visible.value = false;
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
const availdateResult = ref({});
const confirm = () => {
	formRef.value
		.validator()
		.then(res => {
			emit('on-confirm', true, res);
			close();
		})
		.catch(err => {
			emit('on-confirm', false, err);
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
