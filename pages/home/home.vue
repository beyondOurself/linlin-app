<template>
	<view class="">
		
	<u-popup :show="show" mode="top"  @close="close" @open="open">
	        <view>
	            <text>人生若只如初见，何事秋风悲画扇</text>
	        </view>
		</u-popup>
	<lg-base-container title="首页" isCustom>
		{{show}}
		
		<!-- <u-popup :show="true" @close="close" @open="open">
		           <u-swiper indicator :list="list3" previousMargin="140" nextMargin="140" :height="45" circular :autoplay="false" radius="100" bgColor="#ffffff"
		           @change="e => current = e.current"
		           >
		           	<view slot="indicator" class="indicator">
		           		<view class="indicator__dot" v-for="(item, index) in list3" :key="index" :class="[index === current && 'indicator__dot--active']"></view>
		           	</view>
		           </u-swiper> 
				   8888
				</u-popup> -->
				<u-button @click="openTrigger">打开</u-button>
		
		
	</lg-base-container>
	</view>
</template>
<script >
	export default {
		
		methods:{
		
		}
	}
</script>
<script setup>
import { ref } from 'vue'
import HomeHeadCard from './components/HomeHeadCard.vue'
import HomeSwipterButtons from './components/HomeSwipterButtons.vue'
const list3 = ref(['https://cdn.uviewui.com/uview/swiper/swiper3.png', 'https://cdn.uviewui.com/uview/swiper/swiper2.png', 'https://cdn.uviewui.com/uview/swiper/swiper1.png','https://cdn.uviewui.com/uview/swiper/swiper1.png','https://cdn.uviewui.com/uview/swiper/swiper1.png','https://cdn.uviewui.com/uview/swiper/swiper1.png','https://cdn.uviewui.com/uview/swiper/swiper1.png'])
const current = ref(0)
const  show = ref(false)
const close = () => {
	console.log(">>>>");
	show.value = false
}
const  open = () => {
	console.log("<<<<");
}
const openTrigger = () => {
	 show.value  = !show.value
	 console.log("点击了~>>>",show.value);
}
</script>

<style lang="scss" scoped>
.indicator {
	@include flex(row);
	justify-content: center;

	&__dot {
		height: 6px;
		width: 6px;
		border-radius: 100px;
		background-color: rgba(255, 255, 255, 0.35);
		margin: 0 5px;
		transition: background-color 0.3s;

		&--active {
			background-color: #ffffff;
		}
	}
}

.indicator-num {
	padding: 2px 0;
	background-color: rgba(0, 0, 0, 0.35);
	border-radius: 100px;
	width: 35px;
	@include flex;
	justify-content: center;

	&__text {
		color: #ffffff;
		font-size: 12px;
	}
}
</style>
