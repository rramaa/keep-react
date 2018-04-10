import React, { Component } from 'react'
import Sidebar from 'scripts/containers/Sidebar'
import MainContent from 'scripts/containers/MainContent'
import configureStore from 'scripts/services/store'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

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
  <HashRouter>
    <Provider store={store}>
      <ToDo />
    </Provider>
  </HashRouter>
)
export default App
