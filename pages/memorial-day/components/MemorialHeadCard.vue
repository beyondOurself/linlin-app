<template>
	<view class="head-card_wrap_box">
		<lg-base-ground-glass>
			<view class="card_wrap">
				<view class="card__label_wrap">ta 的生日还有</view>
				<view class="card__remaining-days_wrap">
				<view class="remaining-day_wrap">
					254
				</view>天
				</view>
				<view class="card__target-date_wrap">目标日:2022年10月28日</view>
				<view class="card__hint_wrap">
					最近的纪念日
				</view>
			</view>
		</lg-base-ground-glass>
	</view>
</template>

<script setup></script>

<style lang="scss" scoped >
	.head-card_wrap_box{
		box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, 0.2);
		border-radius: $uni-border-radius-lg;
	}
	
	.card_wrap{
		padding: 20rpx;
	}
	.card__label_wrap{
		font-size: 1.1em;
	}
	.card__remaining-days_wrap{
		margin-top: 10rpx;
		margin-bottom: 30rpx;
	}
	.card__target-date_wrap{
		color:$lg-text-color-light ;
		font-size: .8em;
	}
	.card__hint_wrap{
	   position: absolute;
	   top: 0;
	   right: 0;
	   
	   padding: 20rpx;
	   border-bottom-left-radius: $uni-border-radius-lg;
	   
	   
	   background-color: $lg-color-primary;
	   font-size: .85em;
	   color: #fff;
	   font-weight: bold;
	   
	   
	}
	.remaining-day_wrap{
		
		display: inline-block;
		
		margin-right: 10rpx;
		
	    color : $lg-color-primary ;
		font-weight: bold;
		font-size: 1.8em;
	}
	
</style>
