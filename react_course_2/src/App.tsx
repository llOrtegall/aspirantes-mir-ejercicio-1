import { TodoItem } from "./components/TodoItem"
import { TodoItemI } from "./types/Todo"
import { useState } from "react"

const TodosArray = [
  { id: 1, title: 'task 1',  description: 'Ejercicio 1 test', completed: true },
  { id: 2, title: 'task 2',  description: 'Ejercicio 2 test', completed: false },
  { id: 3, title: 'task 3',  description: 'Ejercicio 3 test', completed: true },
  { id: 4, title: 'task 4',  description: 'Ejercicio 4 test', completed: false },
  { id: 5, title: 'task 5',  description: 'Ejercicio 5 test', completed: true }
]

function App() {
  const [todos, setTodos] = useState<TodoItemI[]>(TodosArray)

  const handleChangeNewTodo = (ev: React.FormEvent) => {
    ev.preventDefault()
    const form = ev.target as HTMLFormElement;
    const fields = Object.fromEntries(new window.FormData(form))

    const title_add = fields.title as string
    const descri_add = fields.description as string

    if(!title_add || !descri_add){
      throw new Error('los campos no pueden estar vacios')
    }

    const addTodo: TodoItemI = { id: (todos.length + 1),  title: title_add as string, description: descri_add as string , completed: false }

    const copyTodos = [...todos]
    copyTodos.push(addTodo)

    setTodos(copyTodos)

    

  }

  return (
    <section className="w-screen h-screen bg-slate-200">

      <main className="flex">
        <div className="w-5/12 m-auto px-12 py-4 rounded-lg bg-yellow-200">
          <h1 className="text-center mb-4 text-2xl font-semibold uppercase">Creación Nueva Tarea</h1>

          <form className="flex flex-col" onSubmit={handleChangeNewTodo}>
            <label>Nombre Tarea:</label>
            <input name="title" type="text" placeholder="Realizar Mantenimiento ..."
              className="mb-4 py-2 px-4 rounded-md " />
            <label>Descripción Tarea:</label>
            <textarea name="description" id="" placeholder="resumen de mi tarea"
              className="rounded-md p-2 mb-6"></textarea>
            <button className="px-4 py-2 rounded-md text-white font-semibold bg-green-700 mx-auto hover:bg-green-500">
              Agregar Nueva Tarea
            </button>
          </form>

        </div>

        <ul className="w-5/12 m-auto">
          <section className="flex flex-col items-center">
            <h1 className="py-2 text-2xl font-semibold">Tareas Pendientes</h1>
            <input type="text" placeholder="Buscar Tarea" className="mb-4 py-2 px-4 rounded-md " />
          </section>
          {
            todos.map(todo => <TodoItem key={todo.id} id={todo.id} title={todo.title} description={todo.description} completed={todo.completed} /> )
          }
        </ul>
      </main>

    </section>
  )
}

export default App
