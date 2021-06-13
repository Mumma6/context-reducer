import React, { useContext, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import { TodoContext } from '../contexts/todoContext'

const TodoListItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext)
  const [input, setInput] = useState(todo.description)
  const [updateMode, setUpdateMode] = useState(false)

  const toggleTodo = (e) => {
    e.preventDefault()
    dispatch({
      type: 'TOGGLE_TODO',
      todo,
    })
  }

  const deleteTodo = (e) => {
    e.preventDefault()
    dispatch({
      type: 'DELETE_TODO',
      todo,
    })
  }

  const updateTodo = (e) => {
    e.preventDefault()
    if (updateMode) {
      dispatch({
        type: 'UPDATE_TODO',
        todo,
        input,
      })
    }
    setUpdateMode(!updateMode)
  }

  return (
    <ListGroup.Item variant={todo.completed ? 'dark' : 'light'}>
      {!updateMode ? (
        <p style={{ textDecoration: todo.completed ? 'line-through' : null, color: 'black' }}>{todo.description}</p>
      ) : (
        <InputGroup size="sm" className="mb-3">
          <FormControl
            aria-label="Small"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </InputGroup>
      )}
      <ButtonGroup size="sm">
        <Button disabled={updateMode} onClick={(e) => toggleTodo(e)} variant="success">Toggle completed</Button>
        <Button onClick={(e) => updateTodo(e)} variant="info">{updateMode ? 'Save update' : 'toggle update'}</Button>
        <Button disabled={updateMode} onClick={(e) => deleteTodo(e)} variant="danger">Remove</Button>
      </ButtonGroup>
    </ListGroup.Item>
  )
}

export default TodoListItem