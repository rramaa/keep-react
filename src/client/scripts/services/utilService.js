import localStorageService from "scripts/services/localStorageService"

export function getSelectedCategory(){
	return 1
}

export function getCategories(CATEGORY_KEY){

	let categories = localStorageService.getItem(CATEGORY_KEY)

	if(!categories){
		categories = [{id: 1, label: "All"}]
		localStorageService.setItem(CATEGORY_KEY, categories)
	}
	return categories
}

export function noop(data){
	return data
}