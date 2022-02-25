import { mapState, createNamespacedHelpers  } from 'vuex'

import {useStateMapper} from './useMapper.js'


export default function useState(moduleName,mapper){
	let mapperFn = mapState
	if(typeof moduleName == 'string' &&  moduleName.length > 0 ){
		mapperFn = createNamespacedHelpers(moduleName).mapState
	}
	
	return useStateMapper(mapper,mapperFn)
}