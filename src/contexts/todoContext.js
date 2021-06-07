import { createContext, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { todoReducer } from '../reducers/todoReducer'

export const TodoContext = createContext()

const TodoContextProvider = ({ children }) => {
  const initialState = [ // använda localStorage, gör en customHook för det useLocalStorage
  ]
  const [todos, dispatch] = useReducer(todoReducer, initialState)

  // i want to first sort by completed, then by name
  function mysortfunction(a, b) {
    var o1 = a.completed;
    var o2 = b.completed;
  
    var p1 = a.description;
    var p2 = b.description;
  
    if (o1 < o2) return 1;
    if (o1 > o2) return -1;
    if (p1 < p2) return -1;
    if (p1 > p2) return 1;
    return 0;
  }

  const sortedTodos = todos.sort((a, b) => mysortfunction(a, b))

  return (
    <TodoContext.Provider value={{ todos, dispatch, sortedTodos }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider