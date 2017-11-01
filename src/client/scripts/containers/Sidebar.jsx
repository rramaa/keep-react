import React, {Component} from "react"
import Button from "scripts/components/Button"

function _normaliseInput(value){
	if(value){
		value = value[0].toUpperCase() + value.substring(1)
	}
	return value
}

class Sidebar extends Component{
	constructor(props) {
		super(props)
		this.state = {
			inputValue: ""	
		}

		this.handleChange = this.handleChange.bind(this)
		this.onCategorySubmit = this.onCategorySubmit.bind(this)
	}

	getCategories({categories, selectedCategory}){
		return categories.map((v) => {
			return (
					<li
						key={v.id}
						className={`category-item ${(v.id == selectedCategory ? "selected": "")}`}
						onClick={() => this.props.onCategoryChange(v.id)}
					>
						{v.label}
					</li>
				)
		})
	}

	handleChange(e){
		let inputValue = _normaliseInput(e.target.value)
		this.setState({
			inputValue
		})
	}

	onCategorySubmit(){
		let categoryLabel = this.state.inputValue
		this.props.onCategoryAdd(categoryLabel)
		this.setState({
			inputValue: ""
		})
	}

	render(){
		return (
			<div> 
				Categories
				<div className="category-input">
					<input type="text" onChange={this.handleChange} value={this.state.inputValue}/>
					<Button text="Submit" onClick={this.onCategorySubmit}/>
				</div>
				<ul className="category-list">
					{this.getCategories(this.props)}
				</ul>
			</div>
		)
	}
}

export default Sidebar