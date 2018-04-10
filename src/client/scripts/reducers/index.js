import localStorageService from 'scripts/services/localStorageService'
import {getSelectedCategory, getCategories} from 'scripts/services/utilService'
import CONSTANTS from 'scripts/constants'

export function getInitialState () {
  const categories = getCategories(CONSTANTS.CATEGORY_KEY)
  const notes = localStorageService.getItem(CONSTANTS.NOTE_KEY)
  const selectedCategory = getSelectedCategory()
  const newState = {
    notes,
    categories,
    selectedCategory
  }
  return newState
}

export default function rootReducer (state = {}, {type, payload}) {
  let {categories, notes, selectedCategory} = state
  let newState = {}
  switch (type) {
    case 'CATEGORY_ADDED':
      categories.push({
        id: categories.length + 2,
        label: payload
      })
      newState = {
        ...state,
        categories
      }
      localStorageService.setItem(CONSTANTS.CATEGORY_KEY, categories)
      break
    case 'NOTE_ADDED':
      notes = notes || []
      let note = payload
      note.id = notes.length + 1
      notes.push(note)
      newState = {
        ...state,
        notes
      }
      localStorageService.setItem(CONSTANTS.NOTE_KEY, notes)
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
