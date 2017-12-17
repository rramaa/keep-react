import React, { Component } from "react"
import { render } from "react-dom"
import Sidebar from "scripts/containers/Sidebar"
import MainContent from "scripts/containers/MainContent"
import localStorageService from "scripts/services/localStorageService"
import style from "style/style"
import configureStore from 'scripts/services/store'
import { Provider, connect } from 'react-redux'

let store = configureStore()

class ToDo extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="sidebar df">
                    <Sidebar />
                </div>
                <div className="main-content">
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
