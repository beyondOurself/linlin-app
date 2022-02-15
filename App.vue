<script>
	import initApp from '@/common/appInit.js';
	import openApp from '@/common/openApp.js';
	import checkIsAgree from '@/pages/uni-agree/utils/uni-agree.js';
	export default {
		globalData: {
			searchText: '',
			appVersion: {},
			config: {},
			$i18n: {},
			$t: {}
		},
		onLaunch: function() {
			console.log('App Launch')
			this.globalData.$i18n = this.$i18n
			this.globalData.$t = str => this.$t(str)

			initApp();
			
			// #ifdef H5
				openApp() //创建在h5端全局悬浮引导用户下载app的功能
			// #endif
			// #ifdef APP-PLUS
			//checkIsAgree(); APP端暂时先用原生默认生成的。目前，自定义方式启动vue界面时，原生层已经请求了部分权限这并不符合国家的法规
			// #endif

			// #ifdef H5
			// checkIsAgree(); // 默认不开启。目前全球，仅欧盟国家有网页端同意隐私权限的需要。如果需要可以自己去掉注视后生效
			// #endif

			// #ifdef APP-PLUS
			//idfa有需要的用户在应用首次启动时自己获取存储到storage中
			//https://ask.dcloud.net.cn/article/36107
			/*if(~plus.storage.getItem('idfa')){
				plus.device.getInfo({//需要勾选IDFA
					success:function(e){  
						console.log('idfa =  '+JSON.stringify(e.idfa));  
					},
					fail:function(e){
						console.log('getDeviceInfo failed: '+JSON.stringify(e));  
					}  
				});
			}*/
			// #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "@/uni_modules/uview-ui/index.scss";
	/* 自定义 start */
	
	$lg-color-primary: #fb81a9;
	$lg-color-primary-light: #ff9ebd;
	$lg-color-assistant-orange: #ffaa7b;
	$lg-color-assistant-cyan: #7bdfc2;
	$lg-color-assistant-purple: #d7a3ff;
	$lg-color-assistant-blue: #86cdf2;
	// -- tabBar 图标颜色
	$lg-color-baby-blue: #b0dfff;
	$lg-color-light-pink: #f9e8f9;
	$lg-color-pinkish-purple: #f0a0f2;
	$lg-color-lavender: #d0bff9;
	$lg-color-violet: #be92f1;
	$lg-color-pink: #f5aef4;
	$lg-color-light-cyan: #7aede5;
	$lg-color-cyan: #44dcdf;
	//-- tabBar 图标颜色
	$lg-text-color: #493b41;
	$lg-text-color-light: #696063;
	$lg-text-color-lightest: #c8bec3;
	$lg-bg-color: #f0f0f0;
	$lg-bg-color-lightest: #fff;
	
	$lg-grap-scroll:40rpx;
	
	/* 自定义 end */
</style>
