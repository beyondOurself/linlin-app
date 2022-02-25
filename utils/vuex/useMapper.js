import {useStore} from 'vuex'
import {computed} from 'vue'

export function useStateMapper(mapper,mapFn){
	
	const store = useStore()
	const storeStateFns = mapFn(mapper)
	
	const storeState =  {}
	Object.keys(storeStateFns).forEach(fnKey => {
		
		const fn = storeStateFns[fnKey].bind({$store:store})
		storeState[fnKey] = computed(fn)
	})
	
	return storeState
}

export function useActionMapper(mapper,mapFn){
	
	const store = useStore()
	
	const storeActionsFns = mapFn(mapper)
	
	const storeAction = {}
	
	Object.keys(storeActionsFns).forEach(fnkey => {
		storeAction[fnkey] = storeActionsFns[fnkey].bind({$store:store})
	})
	
	return storeAction
}