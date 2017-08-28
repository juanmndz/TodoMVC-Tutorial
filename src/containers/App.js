import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import TodoTextInput from '../components/TodoTextInput'
import * as TodoActions from '../actions'

const App = ({ todos, actions }) => {
  const renderTodo = todo =>
    <li key={todo.id}>
      {todo.text} {todo.id}
    </li>
  const handleSave = text => {
    if (text.length !== 0) {
      actions.addTodo(text)
    }
  }

  return (
    <div>
      <h2>Todos</h2>
      <TodoTextInput placeholder="Type a todo" onSave={handleSave} />
      {todos.map(renderTodo)}
    </div>
  )
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
  todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(
  App,
)
