import React, { Component } from 'react'
import Sidebar from 'scripts/containers/Sidebar'
import MainContent from 'scripts/containers/MainContent'
import configureStore from 'scripts/services/store'
import { Provider } from 'react-redux'

let store = configureStore()

class ToDo extends Component {
  render () {
    return (
      <div>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='main-content'>
          <MainContent />
        </div>
      </div>
    )
  }
}

const App = (
  <Provider store={store}>
    <ToDo />
  </Provider>
)
export default App
