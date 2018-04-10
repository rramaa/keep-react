'use strict'
import React, {Component} from 'react'

class Note extends Component {
  render () {
    return (
      <div>
        {this.props.content}
      </div>
    )
  }
}

export default Note
