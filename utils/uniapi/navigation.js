import {
	isObject,
	isString,
	isNumber
} from '@/utils/common/tool.js'

// 页面导航发起
export function navigatiorEmit({
	url = '',
	data = {},
	callback = (data) => {},
	isWindow = false,
	prefix = '/pages/',
	hasPrefix = true
} = {}) {
	if(!url || !isString){
		console.error('url 格式无效')
	   return 
	}
	
	let urlRecast = `/${url}`
	if(hasPrefix){
		urlRecast = `/pages/${url}/${url}`
	}
	uni.navigateTo({
		url: '/pages/memorial-day/memorial-day',
		events: {
			// 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
			onDataTrigger: function(data = {}) {
				callback(data)
			},
		},
		success: function(res) {

			//窗体通信
			if (isWindow) {
				uni.$emit('emitDataTrigger', data)

			} else {
				// 通过eventChannel向被打开页面传送数据
				res.eventChannel.emit('emitDataTrigger', data)
			}
		}
	})


}


// 导航接收
export function navigatiorOn({
	eventChannel = null,
	data = null,
	isWindow = false,
	callback = (data) => {},
	
} = {}) {
	
	if (eventChannel) {

		if (data) {
			eventChannel.emit('onDataTrigger', data);
		}

		if (isWindow) {
			uni.$on('emitDataTrigger', function(data) {
				callback(data)
			})
		} else {
			eventChannel.$on('emitDataTrigger', function(data) {
				 callback(data)
			});
		}

	}

}

// 页面跳转】
/**
 * @param {string} [|switch | relaunch | redirect ]  //跳转类型
 */
export function navigatiorGo(url = 1,{type = 'switch',hasPrefix = true, prefix ='/pages/' } ={} ){
	
	if(isNumber(url)){
		// 回退
		uni.navigateBack({
			delta: url || 1
		});
		
		return
	}
	
	let urlRecast = `/${url}`
	if(hasPrefix){
		urlRecast = `${prefix}${url}/${url}`
	}
	
	if(type === 'switch'){
		uni.switchTab({
			url:urlRecast
		});
	}
	if(type === 'redirect'){
		uni.redirectTo({
			url: urlRecast
		});
	}
	if(type === 'relaunch'){
		uni.reLaunch({
			url: urlRecast
		});
	}
	
}