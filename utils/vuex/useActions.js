import { mapActions, createNamespacedHelpers  } from 'vuex'

import {useActionMapper} from './useMapper.js'


export default function useState(moduleName,mapper){
	let mapperFn = mapActions
	if(typeof moduleName == 'string' &&  moduleName.length > 0 ){
		mapperFn = createNamespacedHelpers(moduleName).mapActions
	}
	
	return useActionMapper(mapper,mapperFn)
}