import { createContext, useReducer } from 'react'
import { todoReducer } from '../reducers/todoReducer'

export const TodoContext = createContext()

const TodoContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, [])

  const sort = (a, b) => {
    const completed1 = a.completed
    const completed2 = b.completed
  
    const description1 = a.description
    const description2 = b.description
  
    if (completed1 < completed2) return 1
    if (completed1 > completed2) return -1
    if (description1 < description2) return -1
    if (description1 > description2) return 1
    return 0
  }

  const sortedTodos = todos.sort((a, b) => sort(a, b))

  return (
    <TodoContext.Provider value={{ todos, dispatch, sortedTodos }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider