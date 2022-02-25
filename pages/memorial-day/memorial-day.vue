<template>
	<lg-container title="纪念日" :tabBarActivated="false">
		<lg-movable-area>
			<lg-scroll @onLoad="onLoadTrigger" :dataList="dataList">
				<template v-slot="slotProps">
					<memorial-head-card></memorial-head-card>
					<template v-for="(item, index) in slotProps.dataList" :key="index">
						<memorial-item-card @onClick="appendFloatButtonClick(item)">
							<view class="item_body">
								<view class="item_left">
									<view class="item_left__icon"><uni-icons type="star"></uni-icons></view>
									<view class="item_left__name">{{ item.name }}</view>
								</view>
								<view class="item_right">{{ item.day }}天</view>
							</view>
						</memorial-item-card>
					</template>
				</template>
			</lg-scroll>
			<template v-slot:addBtn~0~150~200~0>
				<lg-circle-button @onClick="appendFloatButtonClick"></lg-circle-button>
			</template>
		</lg-movable-area>
		<memorial-append-window ref="appendWindowRef" type="bottom" @onConfirm="appendConfirm" @onClose="appendWindowClose"></memorial-append-window>
	</lg-container>
</template>

<script setup>
import { ref, unref, toRef, watch } from 'vue';
import fetchDataList from './apis/fetchMoreDataMemorial.js';
import MemorialHeadCard from './components/MemorialHeadCard.vue';
import MemorialItemCard from './components/MemorialItemCard.vue';
import MemorialAppendWindow from './components/MemorialAppendWindow.vue';
import { memorialItemsAddFetch } from '@/services/memorial/memorial.js';
import { useGetters } from '@/utils/vuex/index.js';
const { calendarTypeMapGet, remindWayMapGet, displayModeMapGet, displayModeListGet, remindWayListGet, calendarTypeListGet } = useGetters('enums', [
	'calendarTypeMapGet',
	'remindWayMapGet',
	'displayModeMapGet',
	'displayModeListGet',
	'remindWayListGet',
	'calendarTypeListGet'
]);
const dataList = ref([
	{
		name: 'ta的生日还有',
		displayModeCode: 2,
		displayModeName: '倒数日',
		calendarTypeCode: 1,
		calendarTypeName: '公历',
		reminderTimeCode: 1,
		reminderTimeName: '不提醒',
		memorialDatetime: '2022-02-21'
	},
	{
		name: '我的生日还有',
		displayModeCode: 2,
		displayModeName: '倒数日',
		calendarTypeCode: 2,
		calendarTypeName: '农历',
		reminderTimeCode: '当天',
		reminderTimeName: 2,
		memorialDatetime: '2022-02-22'
	},
	{
		name: '我们在一起已有',
		displayModeCode: 1,
		displayModeName: '累计日',
		calendarTypeCode: 2,
		calendarTypeName: '农历',
		reminderTimeCode: '提前1天',
		reminderTimeName: 3,
		memorialDatetime: '2022-02-23'
	}
]);
const dataListVal = dataList.value;
const onLoadTrigger = () => {
	setTimeout(() => {
		dataListVal.push(dataListVal.length + 1);
	}, 3000);
	// fetchDataList(dataListVal,status)
};

const test = () => {
	console.log('testing');
};
const appendWindowShow = ref(false);
const appendWindowRef = ref(null);
const appendFloatButtonClick = item => {
	console.log('打开弹窗');
	appendWindowRef.value.open(item);
};

const appendWindowClose = async () => {
	console.log('关闭~');
	appendWindowRef.value.close();
};

const appendConfirm = async (statue, data) => {
	if (statue) {
		const { displayModeCode, calendarTypeCode, reminderTimeCode } = data;
		const makeDataMoel = {
			...data,
			displayModeName: displayModeMapGet.value[displayModeCode],
			calendarTypeName: calendarTypeMapGet.value[calendarTypeCode],
			reminderTimeName: remindWayMapGet.value[reminderTimeCode]
		};
		
		console.log(makeDataMoel)
		const { status } = await memorialItemsAddFetch(makeDataMoel);
		
		uni.showToast({
			title: `新增${status ? '成功' :'失败'}`,
			duration: 1000
		});
	}
};
</script>

<style lang="scss">
.item_body {
	display: flex;
	justify-content: space-between;
}
.item_left {
	display: flex;
}
.item_left__icon {
	margin-right: 25rpx;
}
.item_left__name {
}
</style>
