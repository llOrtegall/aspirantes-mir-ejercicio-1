import { ValidateNewTodo, ValidationError } from "./utilities/ValidationTodos"
import { TodoItem } from "./components/TodoItem"
import { FormEvent, useState } from "react"
import { TodoItemI } from "./types/Todo"
import { toast, Toaster } from "sonner"

function App2() {
  const [todos, setTodos] = useState<TodoItemI[]>([])
  const [message, setMessage] = useState({ message: '', description: ''})
  const [error, setError] = useState({ message: '', description: '' })

  const [titulo, setTitulo] = useState('')
  const [description, setDescription] = useState('')

  const [editingTodo, setEditingTodo] = useState<TodoItemI | null>(null);


  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
  
    try {
      const result = ValidateNewTodo({ titulo, description });
      if (result) {
        if (editingTodo) {
          setTodos(prev =>
            prev.map(todo =>
              todo.id === editingTodo.id
                ? { ...todo, title: titulo, description }
                : todo
            )
          );
          setEditingTodo(null);
        } else {
          setTodos(prev => [
            ...prev,
            { id: prev.length + 1, title: titulo, description, completed: false },
          ]);
        }
  
        setTitulo('');
        setDescription('');
        setMessage({ message: 'Tarea Creada/Actualizada Correctamente', description: titulo });
      }
    } catch (error) {
      if (error instanceof ValidationError) {
        setError({ message: error.message, description: error.name });
      }
    } finally {
      setTimeout(() => {
        setError({ message: '', description: '' });
      }, 4000);
    }
  };

  const handleCompleteTodo = (id: number) => {
    const newArray = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newArray);
  }

  const handleUpdate = (id: number) => {
    const editTodo = todos.find(todo => todo.id === id);
    if (editTodo) {
      setTitulo(editTodo.title);
      setDescription(editTodo.description);
      setEditingTodo(editTodo);
    }
  };

  const handleDelete = (id: number) => {
    const newArray = todos.filter(todo => todo.id !== id)
    try {
      setTodos(newArray)
      setMessage({ message: 'Tarea Eliminada', description: 'Ha sido removida' })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="w-screen h-screen bg-slate-200">

      <main className="flex">
        <div className="w-5/12 m-auto px-12 py-4 rounded-lg bg-yellow-200">
          <h1 className="text-center mb-4 text-2xl font-semibold uppercase">Creación Nueva Tarea</h1>

          <form className="flex flex-col" onSubmit={ev => handleSubmit(ev)}>
            <label>Nombre Tarea:</label>
            <input id="title_new_todo" name="titulo" type="text" placeholder="Realizar Mantenimiento ..."
              className="mb-4 py-2 px-4 rounded-md " value={titulo} onChange={ev => setTitulo(ev.target.value)}/>
            <label>Descripción Tarea:</label>
            <textarea id="description_new_todo" name="description" placeholder="resumen de mi tarea" value={description} onChange={ev => setDescription(ev.target.value)}
              className="rounded-md p-2 mb-6"></textarea>
            <button className="px-4 py-2 rounded-md text-white font-semibold bg-green-700 mx-auto hover:bg-green-500">
              {editingTodo ? 'Guardar Cambios' : 'Agregar Nueva Tarea'}
            </button>
          </form>

        </div>

        <ul className="w-5/12 m-auto">
          <section className="flex flex-col items-center">
            <h1 className="py-2 text-2xl font-semibold">Tareas Pendientes</h1>
            <input type="text" placeholder="Buscar Tarea" className="mb-4 py-2 px-4 rounded-md " />
          </section>
          {
            todos.map(todo => <TodoItem key={todo.id} id={todo.id} title={todo.title} description={todo.description} completeTodo={handleCompleteTodo}
              completed={todo.completed} updateItem={handleUpdate} deleteItem={handleDelete}/>)
          }
        </ul>
      </main>

      { error && error.message !== '' && toast.error(error.message, { description: error.description, id: '_ ',  }) }
      { message && message.message !== '' && toast.success(message.message, { description: message.description, id: '_ ',  }) }

      <Toaster position="top-right" duration={4000} />
    </section>
  )
}

export default App2
