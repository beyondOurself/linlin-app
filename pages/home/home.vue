<template>
		
	<lg-base-container title="首页" isCustom>
		<home-head-card></home-head-card>
		<home-operatives></home-operatives>
	</lg-base-container>
</template>
<script setup>
import { ref } from 'vue'
import HomeHeadCard from './components/HomeHeadCard.vue'
import HomeOperatives from './components/HomeOperatives.vue'

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
