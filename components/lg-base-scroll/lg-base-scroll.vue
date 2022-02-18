<template>
	<scroll-view   class="scroll-view_wrap_box" scroll-y :lower-threshold="100" @scrolltolower="reachMoreTrigger">
		 	<view class="scroll__list_wrap">
		 		<slot :dataList='dataList'></slot>
		 	</view>
		<u-loadmore  :status="status"  :loadmore-text="loadmoreText" :nomore-text="nomoreText"   :loading-text="loadingText"  ></u-loadmore>
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

const loadmoreText = ref("———— 上拉加载 ————")
const nomoreText = ref("———— ● ————")
const loadingText = ref("加载中...")

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

</script>

<style lang="scss" scoped>
$lg-status-bar-height: calc(var(--status-bar-height) + 44px);
.scroll-view_wrap_box{
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin-top: $lg-status-bar-height;
	overflow: hidden;
}
.scroll__list_wrap{
	padding: 25rpx;
}
</style>
