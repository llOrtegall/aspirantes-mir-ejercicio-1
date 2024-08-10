import { ValidateNewTodo, ValidationError } from "./utilities/ValidationTodos"
import { FormEvent, useCallback, useState } from "react"
import { TodoItem } from "./components/TodoItem"
import { TodoItemI } from "./types/Todo"
import { toast, Toaster } from "sonner"

function App() {
  const [todos, setTodos] = useState<TodoItemI[]>([])
  const [message, setMessage] = useState({ message: '', description: ''})
  const [error, setError] = useState({ message: '', description: '' })

  const handleSubmit = useCallback((ev: FormEvent) => {
    ev.preventDefault();

    const form = ev.target as HTMLFormElement;
    const fields = Object.fromEntries(new FormData(form));
    const { titulo, description } = fields as { titulo: string; description: string };

    try {
      const result = ValidateNewTodo({ titulo, description });

      if (result) {
        setTodos((prevTodos) => [
          ...prevTodos,
          { id: prevTodos.length + 1, title: titulo, description, completed: false },
        ]);
        form.reset();
        setMessage({ message: 'Tarea Creada Correctamente', description: titulo })
      }
    } catch (error) {
      if (error instanceof ValidationError) {
        setError({ message: error.message, description: error.name });
      }
    } finally {
      setTimeout(() => setError({ message: '', description: '' }), 4000);
    }
  }, []);

  return (
    <section className="w-screen h-screen bg-slate-200">

      <main className="flex">
        <div className="w-5/12 m-auto px-12 py-4 rounded-lg bg-yellow-200">
          <h1 className="text-center mb-4 text-2xl font-semibold uppercase">Creación Nueva Tarea</h1>

          <form className="flex flex-col" onSubmit={ev => handleSubmit(ev)}>
            <label>Nombre Tarea:</label>
            <input id="title_new_todo" name="titulo" type="text" placeholder="Realizar Mantenimiento ..."
              className="mb-4 py-2 px-4 rounded-md " />
            <label>Descripción Tarea:</label>
            <textarea id="description_new_todo" name="description" placeholder="resumen de mi tarea"
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
            todos.map(todo => <TodoItem key={todo.id} id={todo.id} title={todo.title} description={todo.description} completed={todo.completed} />)
          }
        </ul>
      </main>

      { error && error.message !== '' && toast.error(error.message, { description: error.description }) }
      { message && message.message !== '' && toast.success(message.message, { description: message.description}) }

      <Toaster position="top-right" duration={4000} />
    </section>
  )
}

export default App
