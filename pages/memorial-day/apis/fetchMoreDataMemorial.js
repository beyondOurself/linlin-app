import {
	ref,
	unref
} from 'vue'
export default  function fetchDataList(dataListVal,status) {
	status.value = 'loading'
	  setTimeout(() => {
		if (dataListVal.length  >  15) {
			status.value = 'nomore'
		} else {
			dataListVal.push(dataListVal.length + 1)
			status.value = 'loadmore'
		}
	}, 3000)
}
