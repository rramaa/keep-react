import localStorageService from 'scripts/services/localStorageService'
import CONSTANTS from 'scripts/constants'

export function getSelectedCategory () {
  return 1
}

export function getCategories () {
  let categories = localStorageService.getItem(CONSTANTS.CATEGORY_KEY)

  if (!categories) {
    categories = [{id: 1, label: 'All'}]
    localStorageService.setItem(CONSTANTS.CATEGORY_KEY, categories)
  }
  return categories
}

export function getCategoryById () {
  return getCategories()
  .reduce((map, v) => {
    map[v.id] = v
    return map
  }, [])
}

export function noop (data) {
  return data
}
