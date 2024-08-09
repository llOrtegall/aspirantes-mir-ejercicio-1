import { CreateTodoButton } from './components/CreateTodoButton'
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { useState } from 'react'

const defaultTodos = [
  { id: 1, text: 'cortar cebolla', completed: true },
  { id: 2, text: 'aprender react', completed: false },
  { id: 3, text: 'hacer ejecrcicio', completed: true },
  { id: 4, text: 'lavar vehiculo', completed: false },
  { id: 5, text: 'comprar suministros', completed: true }
]

function App () {
  const [todos, setTodos] = useState(defaultTodos)
  const [search, setSearch] = useState('')

  const filterTodos = todos.filter((t) => {
    return t.text.includes(search)
  })

  return (
    <main className='w-screen h-screen flex flex-col items-center justify-center gap-8 bg-slate-200'>
      <TodoCounter
        completed={todos.length}
        total={todos.filter(t => !!t.completed).length}
      />

      <TodoSearch search={search} setSearch={setSearch} />

      <TodoList>
        {
          filterTodos.map(todo => {
            return (<TodoItem key={todo.id} title={todo.text} complete={todo.completed} />)
          })
        }
      </TodoList>

      <CreateTodoButton />

    </main>
  )
}

export default App
