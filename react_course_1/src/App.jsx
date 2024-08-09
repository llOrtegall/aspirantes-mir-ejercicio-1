import { CreateTodoButton } from './components/CreateTodoButton'
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'

const defaultTodos = [
  { id: 1, text: 'cortar cebolla', completed: true },
  { id: 2, text: 'tarea 2 ta', completed: false },
  { id: 3, text: 'tarea 3 ta', completed: true },
  { id: 4, text: 'tarea 54 ta', completed: false },
  { id: 5, text: 'tarea 5 ta', completed: true }

]

function App () {
  return (
    <main>
      <TodoCounter key={'8128eg117962d917'} completed={5} total={2} />

      <TodoSearch />

      <TodoList>
        {
          defaultTodos.map(todo => {
            return (<TodoItem key={todo.id} title={todo.text} complete={todo.completed} />)
          })
        }
      </TodoList>

      <CreateTodoButton />

    </main>
  )
}

export default App
