// 文档教程: https://uniapp.dcloud.net.cn/uniCloud/schema?id=validatefunction
// 扩展校验函数示例
module.exports = async function(rule, value, data, callback) {
	// rule  当前规则
	// value 当前规则校验数据
	// data  全部校验数据
	// callback 可选，一般用于自定义 errorMessage，如果执行了callback return 值无效，callback 传入的 message 将替换 errorMessage
	// callback('message') 传入错误消息时校验不通过
	// callback() 无参时通过
	// 注意 callback 不支持异步调用，异步请使用 Promise/await/async
	// const db = datab
	// const db = uniCloud.database() 
 //    const dataList = db.collection('lg-data-dictionary').
	//  console.log(dataList)
	
	const db = uniCloud.database();
	const { dic_code,item_code,item_name } = data
	// 获取 `user` 集合的引用
	const {data : resDataList = []} = await db.collection('lg-data-dictionary').where({
		dic_code, 
		status_code:'01'
	}).get() ;
	console.log("data",data)
	if(resDataList.length){
	  for (let item of resDataList) {
	  	
	     console.log(item)
	  	
	  	if(item.item_code === item_code ||  item.item_name ===  item_name ){
	  		callback(`字典数据出现重复:{name : ${item_name} ,code : ${item_code} }`)
	  	}
	  }
	}
	return true
}
