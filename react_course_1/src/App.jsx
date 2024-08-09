import { CreateTodoButton } from './components/CreateTodoButton'
import { TodoCounter } from './components/TodoCounter'
import { TodoSeatch } from './components/TodoSeatch'
import { TodoList } from './components/TodoList'

function App () {
  return (
    <>
      <TodoCounter />
      <TodoSeatch />

      <TodoList>
        Tarea 1
      </TodoList>
      <TodoList>
        Tarea 2
      </TodoList>
      <TodoList>
        Tarea 2
      </TodoList>

      <CreateTodoButton />

    </>
  )
}

export default App
