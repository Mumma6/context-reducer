import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { TodoContext } from '../contexts/todoContext'
import { v4 as uuidv4 } from 'uuid';

const AddTodo = () => {
  const [description, setDescription] = useState('')
  const { dispatch } = useContext(TodoContext)

  const addTodo = (e) => {
    e.preventDefault()
    dispatch({
      type: 'ADD_TODO',
      todo: {
        _id: uuidv4(),
        description,
        completed: false,
      }
    })
    setDescription('')
  }

  return (
    <Form onSubmit={addTodo}>
      <Form.Group>
        <Form.Label>Todo</Form.Label>
        <Form.Control
          type="text"
          placeholder="New todo.."
          autoFocus
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Button variant="success" type="submit">
        Add
      </Button>
    </Form>
  )
}

export default AddTodo
