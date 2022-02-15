<template>
	<lg-base-container title="纪念日" :tabBarActivated="false">
		<lg-base-scroll @onLoad="onLoadTrigger" :dataList="dataList" >
			<template v-slot="slotProps">
				<memorial-head-card></memorial-head-card>
				<template v-for="(item,index) in slotProps.dataList" :key='index'>
					<memorial-item-card >{{item}}</memorial-item-card>
				</template>
			</template>
		</lg-base-scroll>
	</lg-base-container>
</template>

<script setup>
import { ref,unref ,toRef,watch}  from 'vue'
import  fetchDataList  from './apis/fetchMoreDataMemorial.js';
import MemorialHeadCard from './components/MemorialHeadCard.vue';
import MemorialItemCard from './components/MemorialItemCard.vue';


const dataList = ref([1,2,3,4,5,6,7,8,9,10]);
const  dataListVal =  dataList.value
const onLoadTrigger = () => {
	setTimeout(()=>{
		dataListVal.push(dataListVal.length + 1)
	},3000)
	  // fetchDataList(dataListVal,status)
};
 
 const testClickTrigger = () => {
	 console.log("点击了");
	 dataListVal.push(dataListVal.length + 1)
 }

const list = ref([
	{
		thumb: 'https://cdn.uviewui.com/uview/goods/1.jpg'
	},
	{
		thumb: 'https://cdn.uviewui.com/uview/goods/2.jpg'
	},
	{
		thumb: 'https://cdn.uviewui.com/uview/goods/3.jpg'
	},
	{
		thumb: 'https://cdn.uviewui.com/uview/goods/4.jpg'
	},
	{
		thumb: 'https://cdn.uviewui.com/uview/goods/5.jpg'
	}
]);
</script>

<style lang="scss" scoped>
	.scroll-item-wrap{
		height: 100px;
	}
</style>
