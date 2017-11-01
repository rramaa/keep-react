import React, {Component} from "react";
import Button from "../components/Button.jsx";

class MainContent extends Component{
	constructor(props) {
		super(props);
	}

	render(){
		return (<div> 
			Notes
			<div className="notes-input">
				<textarea type="text" onChange={this.handleChange} value={this.inputValue} />
				<Button text="Submit" onClick={this.onCategorySubmit}/>
			</div>
			{JSON.stringify(this.props)}
		</div>);
	}
}

export default MainContent;