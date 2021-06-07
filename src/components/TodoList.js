import React, { useContext } from 'react'
import { TodoContext } from '../contexts/todoContext'
import TodoListItem from './TodoListItem'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const TodoList = () => {
  const { sortedTodos } = useContext(TodoContext)
  return (
    <Card style={{ marginTop: 20 }}>
      <Card.Header style={{ marginBottom: 10 }}>Todos</Card.Header>
      <ListGroup>
        {sortedTodos.map((todo) => (
          <TodoListItem key={todo._id} todo={todo} />
        ))}
      </ListGroup>
    </Card>
  )
}

export default TodoList
