let localStorageService = {}

localStorageService.getItem = function(key){
	let item = window.localStorage.getItem(key)
	try{
		item = JSON.parse(item)
	} catch(e){
		item = {}
	}
	return item
}

localStorageService.setItem = function(key, value){
	window.localStorage.setItem(key, JSON.stringify(value))
}

export default localStorageService