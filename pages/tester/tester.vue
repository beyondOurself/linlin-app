<template>
	<view>
		<!-- <lg-tabs-swiper>
		</lg-tabs-swiper> -->
		<lg-page-swiper :swiperList="swiperList">
			<template #home>
				<lg-scroll :dataList="dataList" ref="homeScrollRef" @onLoad="homeScrollLoadTrigger">
					<template v-slot:default="slotProps">
						<template v-for="(item, index) of slotProps.dataList" :key="index">
							<view class="test-item_box ">{{ item }}</view>
						</template>
					</template>
				</lg-scroll>
			</template>
			<template #slot-3>
				<view>slot-3 page</view>
			</template>
			<template #slot-4>
				<view>slot-4 page</view>
			</template>
			<template #record>
				<view>record-page</view>
			</template>
			<template #shope>
				<view>shope-page</view>
			</template>
			<template #me>
				<view>me-page</view>
			</template>
		</lg-page-swiper>
		<!-- <button @click="testClickTrigger">测试</button> -->
		<!-- 		<lg-scroll :dataList='dataList' >
			 <template v-slot:default='slotProps'>
				 <template v-for="(item,index) of slotProps.dataList" :key="index">
					 <view class="test-item_box ">{{item}}</view>
				 </template>
			 </template>
		</lg-scroll> -->

	</view>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue';
const dataList = ref(['item-1', 'item-2', 'item-3', 'item-4', 'item-5', 'item-6', 'item-7', 'item-8', 'item-9']);
const homeScrollRef = ref(null);

const homeScrollLoadTrigger = () => {
	
	let  length = dataList.value.length;
	dataList.value.push(`item-${length += 1}`);
};


const swiperList = ref([
	{
		title: '首页',
		slot: 'home',
		dataList: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5', 'item-6', 'item-7', 'item-8', 'item-9']
	},
	{
		title: '记录',
		slot: 'record'
	},
	{
		title: 'slot3'
	},
	{
		title: 'slot4'
	}
]);

const navRef = ref(null);
const instance = getCurrentInstance();

const swiperChangeTrigger = index => {
	console.log('swiperChangeTrigger', index);
};

const testClickTrigger = () => {
	// console.log('navRef>>>', navRef);
	// console.log('instance>>>', instance);
	// const query = uni.createSelectorQuery().in(instance);
	// query.select('.uni-nav').fields({ rect: true, size: true }, res => {
	// 	console.log('res==>', res);
	// });
	// query.exec();
};
onMounted(() => {
	// const query = uni.createSelectorQuery().in(instance);
	// query.select('.uni-nav').fields({ rect: true, size: true }, res => {
	// 	console.log('res==>', res);
	// });
	// query.exec();
});
</script>

<style lang="scss" scoped>
.test-item_box {
	height: 100px;
	background-color: lightpink;
}
</style>
