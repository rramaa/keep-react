import React, {Component} from "react"
import {render} from "react-dom"
import Sidebar from "scripts/containers/Sidebar"
import MainContent from "scripts/containers/MainContent"
import localStorageService from "scripts/services/localStorageService"
import style from "style/style"
import {createStore} from 'redux'
import rootReducer from 'scripts/reducers/rootReducer'
import {Provider, connect} from 'react-redux'

let store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {

	constructor(props) {
		super(props)
	}

	componentDidMount(){
		this.props.dispatch({
			type: "INIT"
		})
	}

	render(){
		return (
			<div>
				<div className="sidebar">
					<Sidebar />
				</div>
				<div className="main-content">
					<MainContent />
				</div>
			</div>
		)
	}
}

const ToDo = connect()(App)

const renderApp = () => {
	render(
		(<Provider store={store}>
			<ToDo />
		</Provider>), document.getElementById("root"))
}

renderApp()
