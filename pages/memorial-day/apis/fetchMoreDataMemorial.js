import {
	ref,
	unref
} from 'vue'
export default  function fetchDataList(dataList,status) {
	status.value = 'loadmore'
	const dataListVal = unref(dataList)
	  setTimeout(() => {
		if (dataListVal.lengh == 8) {
			status.value = 'nomore'
		} else {
			status.value = 'loading'
			dataListVal.push(dataListVal.length + 1)
		}
	}, 3000)
	return dataList
}
