<template>
	<scroll-view   class="scroll-view_wrap_box" scroll-y :lower-threshold="50" @scrolltolower="reachMoreTrigger">
		 	<view class="scroll__list_wrap">
		 		<slot :dataList='dataList'></slot>
		 	</view>
		<lg-load-more  :status="status"  ></lg-load-more>
	</scroll-view>
</template>

<script setup>
import { ref, unref ,watch , toRefs} from 'vue';
const props = defineProps({
	dataList:{
		type:Array,
		default: () => []
	}
})

const { dataList } = toRefs(props)
const status = ref('loadmore')
const emit = defineEmits(['on-load'])

let dataListLength = 0
// 监听 dataList 数据是否发生变化
watch(dataList, (nval,oval)  => {
	if(nval.length > dataListLength ){
	    dataListLength = nval.length 
		status.value = 'loadmore'
	}else{
		status.value = 'nomore'
	}
},{
	deep:true
})
const reachMoreTrigger = () => {
	status.value = "loading"
	emit ('onLoad')
};

const nomoreTrigger = () => {
	status.value = "nomore"
}

defineExpose({
	nomoreTrigger
})


</script>

<style lang="scss" scoped>
.scroll-view_wrap_box{
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	overflow: hidden;
}
.scroll__list_wrap{
	padding: 25rpx;
}
</style>
