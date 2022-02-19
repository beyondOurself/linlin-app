<template>
	<lg-base-container title="纪念日" :tabBarActivated="false">
			<lg-base-movable-area>
			<lg-base-scroll @onLoad="onLoadTrigger" :dataList="dataList" >
				<template v-slot="slotProps">
					<memorial-head-card></memorial-head-card>
					<template v-for="(item,index) in slotProps.dataList" :key='index'>
						<memorial-item-card >{{item}}</memorial-item-card>
					</template>
				</template>
			</lg-base-scroll>
			<template v-slot:addBtn~0~150~150~0>
					 <lg-base-float-button @onClick='appendFloatButtonClick'></lg-base-float-button>
			</template>
			</lg-base-movable-area>
			<memorial-append-window ref='appendWindowRef'  type='bottom'   @onClose='appendWindowClose' >
			</memorial-append-window>
	</lg-base-container>
</template>

<script setup>
import { ref,unref ,toRef,watch}  from 'vue'
import  fetchDataList  from './apis/fetchMoreDataMemorial.js';
import MemorialHeadCard from './components/MemorialHeadCard.vue';
import MemorialItemCard from './components/MemorialItemCard.vue';
import MemorialAppendWindow from './components/MemorialAppendWindow.vue';


const dataList = ref([1,2,3,4,5,6,7,8,9,10]);
const  dataListVal =  dataList.value
const onLoadTrigger = () => {
	setTimeout(()=>{
		dataListVal.push(dataListVal.length + 1)
	},3000)
	  // fetchDataList(dataListVal,status)
};
 
const appendWindowShow = ref(false)
const appendWindowRef = ref(null)
const appendFloatButtonClick = () => {
	appendWindowRef.value.open()
} 

const appendWindowClose = () => {
	console.log("关闭~")
	appendWindowRef.value.close()
 }

</script>

<style lang="scss" scoped>
</style>
