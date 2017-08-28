import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoTextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
  }

  state = {
    text: '',
  }
  handleSubmit = e => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }
  render() {
    const {placeholder} = this.props
    return (
      <input
        type="text"
        placeholder={placeholder}
        onKeyDown={this.handleSubmit}
      />
    )
  }
}
