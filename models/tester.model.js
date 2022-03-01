import Base from './base.model.js'
export default class Tester extends Base{

	
	
	set ageSet (val){
		this.ageName = 'ageName2'
		this.ageCode = 'ageCode2'
	}
	
	constructor(){
	   super()
	   this.ageName = 'ageName'
	   this.ageCode = 'ageCode'
	}
	
	
}