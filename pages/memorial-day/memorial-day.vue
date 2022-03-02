<template>
	<lg-container title="纪念日" :tabBarActivated="false">
		<lg-movable-area>
			<lg-scroll ref="scrollRef" @onLoad="onLoadTrigger" :dataList="dataList">
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
	<lg-loading :offon="loadingOffon"></lg-loading>
</template>
<script>
import { navigatiorOn } from '@/utils/uniapi/navigation.js';
export default {
	onLoad: function(option) {
		const eventChannel = this.getOpenerEventChannel();
		navigatiorOn({
			eventChannel,
			callback: v => {
				console.log('v>>>', v);
			}
		});
	}
};
</script>
<script setup>
import { ref, unref, toRef, watch, onMounted, getCurrentInstance } from 'vue';
import fetchDataList from './apis/fetchMoreDataMemorial.js';
import MemorialHeadCard from './components/MemorialHeadCard.vue';
import MemorialItemCard from './components/MemorialItemCard.vue';
import MemorialAppendWindow from './components/MemorialAppendWindow.vue';

import ResultModel from '@/models/result.model.js';
import MemorialDayModel from '@/models/memorial-day.model.js';
import { memorialItemsAddFetch, memorialItemsListFetch, memorialItemUpdateByIdFetch, memorialItemsLoadMoreFetch } from '@/services/memorial/memorial.js';

// loading 控制器

const loadingOffon = ref(false);

// 初始化列表
const dataList = ref([]);
const dataListInit = async () => {
	const { status, data } = await memorialItemsListFetch();
	if (status) {
		dataList.value = data;
	}
};
dataListInit();

// 加载更多

const scrollRef = ref(null);
const onLoadTrigger = async () => {
	const dataListVal = unref(dataList);
	const { _id: id } = dataListVal[dataListVal.length - 1];
	const { status: resultStatus, data: resultData = [] } = await memorialItemsLoadMoreFetch(id);
	if (resultData && resultData.length) {
		dataListVal.push(...resultData);
	} else {
		scrollRef.value.nomoreTrigger();
	}
};

const test = () => {
	console.log('testing');
};
const appendWindowShow = ref(false);
const appendWindowRef = ref(null);
const appendFloatButtonClick = item => {
	appendWindowRef.value.open(item);
};

const appendWindowClose = async () => {
	appendWindowRef.value.close();
};

const appendConfirm = async (statue, data) => {
	loadingOffon.value = true;
	if (statue) {
		const memorialDayInstance = new MemorialDayModel();
		const recastModel = await memorialDayInstance.recast(data);
		const { _id: id = '' } = data;
		let result = {};
		if (id) {
			// 更新
			result = await memorialItemUpdateByIdFetch(id, recastModel);
		} else {
			//新增
			result = await memorialItemsAddFetch(recastModel);
		}
		const { status, type, message } = result;
		uni.showToast({
			icon: type,
			title: message,
			duration: 3000
		});
		if (status) {
			dataListInit();
		}
	}
	loadingOffon.value = false;
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
