import React, { useContext } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { TodoContext } from '../contexts/todoContext'

const TodoListItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext)

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
  return (
    <ListGroup.Item variant={todo.completed ? 'dark' : 'light'}>
      <p style={{ textDecoration: todo.completed ? 'line-through' : null, color: 'black' }}>{todo.description}</p>
      <ButtonGroup aria-label="Basic example">
        <Button onClick={(e) => toggleTodo(e)} variant="info">Toggle completed</Button>
        <Button onClick={(e) => deleteTodo(e)} variant="danger">Remove</Button>
      </ButtonGroup>
    </ListGroup.Item>
  )
}

export default TodoListItem