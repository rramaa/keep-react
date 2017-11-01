import React, {Component} from "react"
import Button from "scripts/components/Button"
import Note from "scripts/components/Note"

class MainContent extends Component{
	constructor(props) {
		super(props)
		this.state = {
			inputValue: ""
		}
		this.handleChange = this.handleChange.bind(this)
		this.onNoteAddSubmit = this.onNoteAddSubmit.bind(this)
	}

	handleChange(e){
		let inputValue = e.target.value
		this.setState({
			inputValue
		})
	}

	onNoteAddSubmit(){
		let content = this.state.inputValue
		let category = this.props.selectedCategory
		this.props.onNoteAdd({content, category})

		this.setState({
			inputValue: ""
		})
	}

	_getNotes(){
		if(!this.props.notes){
			return
		}
		return this.props.notes
		.filter(v => this.props.selectedCategory == 1 || (v.category == this.props.selectedCategory))
		.map(v => {
			return (<Note content={v.content} key={v.id} />)
		})
	}

	render(){
		return (<div> 
			Notes
			<div className="notes-input">
				<textarea type="text" onChange={this.handleChange} value={this.state.inputValue} />
				<Button text="Submit" onClick={this.onNoteAddSubmit}/>
			</div>
			{this._getNotes()}
		</div>)
	}
}

export default MainContent