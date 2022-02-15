<template>
	<scroll-view class="scroll-view-box" scroll-y :lower-threshold="100" @scrolltolower="reachMoreTrigger">
		 <slot :dataList='dataList'></slot>
		<u-loadmore  :status="status"  :loadmore-text="loadmoreText" :nomore-text="nomoreText"   :loading-text="loadingText"  ></u-loadmore>
	</scroll-view>
</template>

<script setup>
import { ref, unref } from 'vue';
const props = defineProps({
	status : {
		type:String, 
		default:'loadmore',
		validator: v =>  (['nomore','loadmore','loading'].includes(v))
	},
	dataList:{
		type:Array,
		default: () => []
	}
})
const emit = defineEmits(['on-load'])
const loadmoreText = ref("———— 上拉加载 ————")
const nomoreText = ref("———— ● ————")
const loadingText = ref("加载中...")
const reachMoreTrigger = () => {
	emit ('on-load')
};

</script>

<style lang="scss" scoped>
$lg-status-bar-height: calc(var(--status-bar-height) + 44px);
.scroll-view-box {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: red;
	padding: 10px;
	margin-top: $lg-status-bar-height;
	overflow: hidden;
}
.test-wrap-box {
	height: 100px;
}
</style>
