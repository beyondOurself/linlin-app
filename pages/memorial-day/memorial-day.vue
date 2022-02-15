<template>
	<lg-base-container title="纪念日" :tabBarActivated="false">
		<!-- <lg-base-avatar></lg-base-avatar> -->
		<lg-base-scroll @onLoad="onLoadTrigger" :dataList="dataList" :status="status"></lg-base-scroll>
	</lg-base-container>
</template>

<script setup>
import  fetchDataList  from './apis/fetchMoreDataMemorial.js';
import MemorialHeadCard from './components/MemorialHeadCard';

 
import { ref,unref ,toRef} from 'vue';

const status = ref('');
const dataList = ref([]);
 const  statusVal =   toRef(status)
 const  dataListVal =   unref(dataList)
 statusVal = "xxxxx"
 dataListVal.push(1)
  console.log(">>>",status.value)
  console.log(">>>2",dataList.value)
const onLoadTrigger = () => {
	  const list = fetchDataList(status)
	  console.log("list",list.value)
	 dataList.value = list.value
};

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

<style lang="scss" scoped></style>
