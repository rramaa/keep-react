import React, {Component} from 'react'
import {connect} from 'react-redux'
import Button from 'scripts/components/Button'
import Note from 'scripts/components/Note'
import { getCategoryById } from 'scripts/services//utilService'
import CONSTANTS from 'scripts/constants'
import createRoutedComponent from 'scripts/services/RoutingHoc'

class MainContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.onNoteAddSubmit = this.onNoteAddSubmit.bind(this)
  }

  handleChange (e) {
    let inputValue = e.target.value
    this.setState({
      inputValue
    })
  }

  onNoteAddSubmit () {
    const {
      match: {
        params: {
          category
        }
      }
    } = this.props
    let content = this.state.inputValue
    this.props.dispatch({
      type: 'NOTE_ADDED',
      payload: {content, category}
    })

    this.setState({
      inputValue: ''
    })
  }

  _getNotes () {
    const {
      match: {
        params: {
          category
        }
      },
      notes
    } = this.props
    if (!notes) {
      return
    }
    const categories = getCategoryById()
    return this.props.notes
    .filter(v => (
      category === CONSTANTS.DEFAULT_CATEGORY_NAME ||
      categories[v.category].label === category
    ))
    .map(v => {
      return (<Note content={v.content} key={v.id} />)
    })
  }

  render () {
    return (<div>
    Note
    <div className='notes-input'>
      <textarea type='text' onChange={this.handleChange} value={this.state.inputValue} />
      <Button text='Submit' onClick={this.onNoteAddSubmit} />
    </div>
      {this._getNotes()}
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

export default createRoutedComponent(connect(mapStateToProps)(MainContent))
