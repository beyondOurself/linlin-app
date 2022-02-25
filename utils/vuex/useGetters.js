import { mapGetters, createNamespacedHelpers  } from 'vuex'

import {useStateMapper} from './useMapper.js'


export default function useState(moduleName,mapper){
	let mapperFn = mapGetters
	if(typeof moduleName == 'string' &&  moduleName.length > 0 ){
		mapperFn = createNamespacedHelpers(moduleName).mapGetters
	}
	
	return useStateMapper(mapper,mapperFn)
}