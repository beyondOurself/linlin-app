<template>
	<view class="operatives_wrap_box">
		<view class="agenda_wrap" @click="openAgendaPage">
		   <u-button type="primary" shape="circle"  icon='calendar-fill' color="linear-gradient(to right, #be92f1, #f5aef4, #b0dfff)"></u-button>
		</view>
		<view class="menstruation_wrap">
		<u-button type="primary" shape="circle"  icon='heart-fill' color="linear-gradient(to bottom, #be92f1, #f5aef4,#b0dfff)"></u-button>
		</view>
		<view class="period_wrap" @click="openPeriodPage" >
		<u-button type="primary" shape="circle"  icon='order' color="linear-gradient(to left, #be92f1, #f5aef4,#b0dfff)"></u-button>
		</view>
	</view>
</template>

<script  setup>
	
	const openAgendaPage = () => {
		uni.$u.route('/pages/memorial-day/memorial-day');
	}
	
	const openPeriodPage = () => {
		uni.$u.route('/pages/period/period');
	}
	
</script>

<style lang="scss" scoped>
	.agenda_wrap,.menstruation_wrap,.period_wrap {
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
