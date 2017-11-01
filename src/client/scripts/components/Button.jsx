import React, {Component} from "react"

class Button extends Component{
	constructor(props) {
		super(props)
	}

	render(){
		return (
			<button
			  onClick={this.props.onClick}
			  disabled={this.props.disabled}
			  >
			{this.props.text}
			</button>
		)
	}
}

export default Button