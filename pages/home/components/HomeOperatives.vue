<template>
	<view class="operatives_wrap_box">
		<view class="agenda_wrap" @click="openAgendaPage">
		   <u-button type="primary" shape="circle"  icon='calendar-fill' color="linear-gradient(to right, #86cdf2, #fb81a9)"></u-button>
		</view>
		<view class="menstruation_wrap">
		<u-button type="primary" shape="circle"  icon='heart-fill' color="linear-gradient(to bottom, #86cdf2, #fb81a9)"></u-button>
		</view>
		<view class="inventory_wrap">
		<u-button type="primary" shape="circle"  icon='order' color="linear-gradient(to left, #86cdf2, #fb81a9)"></u-button>
		</view>
	</view>
</template>

<script  setup>
	
	const openAgendaPage = () => {
		uni.$u.route('/pages/memorial-day/memorial-day');
	}
</script>

<style lang="scss" scoped>
	.agenda_wrap,.menstruation_wrap,.inventory_wrap {
		display: inline-block;
	}
	.operatives_wrap_box{
		width: 100%;
		display: flex;
		justify-content: space-around;
		position: absolute;
		bottom: 10rpx;
	}
</style>
