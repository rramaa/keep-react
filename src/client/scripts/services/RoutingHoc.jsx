import React, {Component} from 'react'
import { getSelectedCategory, getCategoryById } from 'scripts/services//utilService'
import { Route, Switch, Redirect } from 'react-router-dom'

function createRoutedComponent (Comp) {
  class RoutedComponent extends Component {
    render () {
      const selectedCategory = getSelectedCategory()
      const category = getCategoryById()
      const categoryName = category[selectedCategory]
      return (
        <Switch>
          <Redirect from='/' to={`/${categoryName.label}`} exact />
          <Route path='/:category' component={Comp} />
        </Switch>
      )
    }
  }
  return RoutedComponent
}

export default createRoutedComponent
