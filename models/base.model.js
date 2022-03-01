export default class Base {
	
	constructor() {
	}
	skeleton(){
			 const  rawObject = Object.create({})
			 for (let [key,val] of Object.entries(this)) {
			     if(this.hasOwnProperty(key) && !key.startsWith('_')){
					 rawObject[key] = val
				 }
			 }
			 return rawObject
	}
	
}