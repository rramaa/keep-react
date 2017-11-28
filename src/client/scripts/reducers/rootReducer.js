import localStorageService from "scripts/services/localStorageService"
import {getSelectedCategory, getCategories} from "scripts/services/utilService"

const NOTE_KEY = "notes"
const CATEGORY_KEY = "category"

export default function rootReducer(state={}, {type, payload}){
	let {categories, notes, selectedCategory} = state
	let newState = {}
	switch(type){
		case "INIT":
			categories = getCategories(CATEGORY_KEY)
			notes = localStorageService.getItem(NOTE_KEY)
			selectedCategory = getSelectedCategory()
			newState = {
				notes,
				categories,
				selectedCategory
			}
			break
		case "CATEGORY_ADDED":
			categories.push({
				id: categories.length + 1,
				label: payload
			})
			newState = {
				...state,
				categories
			}
			localStorageService.setItem(CATEGORY_KEY, categories)
			break
		case "CATEGORY_CHANGED":
			newState = {
				...state,
				selectedCategory: payload.id	
			}
			break
		case "NOTE_ADDED":
			notes = notes || []
			let note = payload
			note.id = notes.length + 1
			notes.push(note)
			newState = {
				...state,
				notes
			}
			localStorageService.setItem(NOTE_KEY, notes)
			break
		default:
			newState = {
				notes,
				categories,
				selectedCategory
			}
	}
	return newState
}
