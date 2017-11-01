import React, {Component} from "react"
import {render} from "react-dom"
import Sidebar from "scripts/containers/Sidebar"
import MainContent from "scripts/containers/MainContent"
import localStorageService from "scripts/services/localStorageService"
import style from "style/style"

const NOTE_KEY = "notes"
const CATEGORY_KEY = "category"

function _getSelectedCategory(){
	return 1
}

function _initCategories(categories){
	if(!categories){
		categories = [{id: 1, label: "All"}]
		localStorageService.setItem(CATEGORY_KEY, categories)
	}
	return categories
}

function _checkCategoryExists(id, categories){
	return !!categories.filter((v) => {
		return v.id == id
	}).length
}

class App extends Component {

	constructor(props) {
		super(props)
		let categories = _initCategories(localStorageService.getItem(CATEGORY_KEY))
		this.state = {
			notes: localStorageService.getItem(NOTE_KEY),
			categories: categories,
			selectedCategory: _getSelectedCategory()
		}

		this.onCategoryChange = this.onCategoryChange.bind(this)
		this.onCategoryAdd = this.onCategoryAdd.bind(this)
		this.onNoteAdd = this.onNoteAdd.bind(this)
	}

	onCategoryChange(id){
		if(_checkCategoryExists(id, this.state.categories)) {
			this.setState({
				selectedCategory: id
			})
		}
	}

	onCategoryAdd(label){
		let {categories} = this.state
		categories.push({
			id: categories.length + 1,
			label
		})
		this.setState({
			categories
		})
		localStorageService.setItem(CATEGORY_KEY, this.state.categories)
	}

	onNoteAdd(note){
		let {notes} = this.state
		notes = notes || []
		note.id = notes.length + 1
		notes.push(note)

		this.setState({
			notes
		})
		localStorageService.setItem(NOTE_KEY, this.state.notes)
	}

	render(){
		return (
			<div>
				<div className="sidebar">
					<Sidebar 
						onCategoryChange = {this.onCategoryChange}
						onCategoryAdd = {this.onCategoryAdd}
						categories = {this.state.categories}
						selectedCategory = {this.state.selectedCategory}
					/>
				</div>
				<div className="main-content">
					<MainContent
						categories = {this.state.categories}
						selectedCategory = {this.state.selectedCategory}
						notes = {this.state.notes}
						onNoteAdd = {this.onNoteAdd}
					/>
				</div>
			</div>
		)
	}
}

render(<App />, document.getElementById("root"))