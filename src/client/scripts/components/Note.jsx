'use strict'
import React, {Component} from 'react'

class Note extends Component{
	constructor(props) {
		super(props)
	}

	render(){
		return (
			<div>
			  {this.props.content}
			</div>
		)
	}
}

export default Note