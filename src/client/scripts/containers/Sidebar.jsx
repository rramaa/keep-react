import React, {Component} from 'react'
import {connect} from 'react-redux'
import Button from 'scripts/components/Button'
import {Link} from 'react-router-dom'
import createRoutedComponent from 'scripts/services/RoutingHoc'

function _normaliseInput (value) {
  if (value) {
    value = value[0].toUpperCase() + value.substring(1)
  }
  return value
}

class Sidebar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.onCategorySubmit = this.onCategorySubmit.bind(this)
  }

  getCategories () {
    const {
      categories,
      match: {
        params: {
          category: selectedCategory
        }
      }
    } = this.props
    return categories && categories.map((v) => {
      return (
        <Link
          to={v.label}
          key={v.id}
        >
          <li
            className={`category-item ${(v.label === selectedCategory ? 'selected' : '')}`}
          >
            {v.label}
          </li>
        </Link>
      )
    })
  }

  handleChange (e) {
    let inputValue = _normaliseInput(e.target.value)
    this.setState({
      inputValue
    })
  }

  onCategorySubmit (e) {
    e.preventDefault()
    let label = this.state.inputValue
    this.props.dispatch({
      type: 'CATEGORY_ADDED',
      payload: label
    })
    this.setState({
      inputValue: ''
    })
  }

  render () {
    return (
      <div>
        Categories
        <form className='category-input' onSubmit={this.onCategorySubmit}>
          <input type='text' onChange={this.handleChange} value={this.state.inputValue} />
          <Button text='Submit' onClick={this.onCategorySubmit} />
        </form>
        <ul className='category-list'>
          {this.getCategories()}
        </ul>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    categories: state.categories,
    selectedCategory: state.selectedCategory
  }
}

export default createRoutedComponent(connect(mapStateToProps)(Sidebar))
