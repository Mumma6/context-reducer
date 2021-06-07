import 'bootstrap/dist/css/bootstrap.min.css';
import TodoContextProvider from './contexts/todoContext'
import Container from 'react-bootstrap/Container'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  return (
    <TodoContextProvider>
      <Container style={{ width: 500, marginTop: 50 }}>
        <AddTodo />
        <TodoList />
      </Container>
    </TodoContextProvider>
  );
}

export default App;
