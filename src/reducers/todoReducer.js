export const ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  UPDATE_TODO: 'UPDATE_TODO',
}

const removeTodo = (todo, action) => todo._id !== action.todo._id

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, action.todo]
    case ACTIONS.DELETE_TODO:
      return state.filter((todo) => removeTodo(todo, action))
    case ACTIONS.TOGGLE_TODO:
      const newTodo = {
        ...action.todo,
        completed: !action.todo.completed
      }
      return [...state.filter((todo) => removeTodo(todo, action)), newTodo]
    case ACTIONS.UPDATE_TODO:
      const updatedTodo = {
        ...action.todo,
        description: action.input
      }
      return [...state.filter((todo) => removeTodo(todo, action)), updatedTodo]
    default:
      return state
  }
}