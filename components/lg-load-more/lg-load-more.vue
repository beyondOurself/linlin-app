<template>
	<view class="lg-load-more_wrap">
		<uni-load-more :status="status" :iconType="iconType" :contentText="contentTextComputed"></uni-load-more></view>
</template>

<script>
export default {
	name: 'LgLoadMore'
};
</script>

<script setup>
import { toRefs, ref, computed } from 'vue';
const props = defineProps({
	status: {
		type: String,
		default: 'loadmore',
		validator: v => ['loadmore', 'nomore', 'loading'].includes(v)
	},
	iconType: {
		type: String,
		default: 'snow',
		validator: v => ['snow', 'circle', 'auto'].includes(v)
	},
	loadmoreText: {
		type: String,
		default: '—— 上拉加载 ——'
	},
	loadingText: {
		type: String,
		default: '正在加载...'
	},
	nomoreText: {
		type: String,
		default: '—— ● ——'
	},
});

const { loadmoreText, nomoreText, loadingText } = toRefs(props);
// 状态内容文本
const contentTextComputed = computed(() => ({
	contentdown: loadmoreText.value,
	contentrefresh: loadingText.value,
	contentnomore: nomoreText.value
}));
</script>

<style lang="scss" scoped></style>
