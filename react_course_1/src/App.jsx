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

  const [newTodo, setnewTodo] = useState('')

  const filterTodos = todos.filter((t) => {
    return t.text.includes(search)
  })

  const completeTodo = (id) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.id === id)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    setTodos(newTodos)
  }

  const handleclickDelete = (id) => {
    const newTodos = [...todos]
    return setTodos(newTodos.filter((todo) => todo.id !== id))
  }

  const handleClickAddTodo = () => {
    const addNewTodo = { id: todos.length + 1, text: newTodo, completed: false }
    const TodosActuales = [...todos]
    TodosActuales.push(addNewTodo)
    setTodos(TodosActuales)
    setTimeout(() => {
      setnewTodo('')
    }, 1000)
  }

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
            return (<TodoItem key={todo.id} id={todo.id} title={todo.text} complete={todo.completed}
              fun={handleclickDelete} completeTodo={completeTodo}/>)
          })
        }
      </TodoList>

      <CreateTodoButton nameNewTodo={newTodo} setNameNewTodo={setnewTodo} addTodo={handleClickAddTodo} />

    </main>
  )
}

export default App
