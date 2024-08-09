const TodosArray = [
  { id: 1, text: 'Ejercicio 1 test', completed: true },
  { id: 2, text: 'Ejercicio 2 test', completed: false },
  { id: 3, text: 'Ejercicio 3 test', completed: true },
  { id: 4, text: 'Ejercicio 4 test', completed: false },
  { id: 5, text: 'Ejercicio 5 test', completed: true }
]

function App() {
  return (
    <section className="w-screen h-screen bg-slate-200">

      <header className="w-full flex flex-col items-center">

      </header>

      <main className="flex">
        <div className="w-5/12 m-auto px-12 py-4 rounded-lg bg-yellow-200">
          <h1 className="text-center mb-4 text-2xl font-semibold uppercase">Creación Nueva Tarea</h1>
          <form className="flex flex-col">
            <label>Nombre Tarea:</label>
            <input type="text" placeholder="Realizar Mantenimiento ..." className="mb-4 py-2 px-4 rounded-md " />
            <label>Descripción Tarea:</label>
            <textarea name="" id="" placeholder="resumen de mi tarea" className="rounded-md p-2 mb-6"></textarea>
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
            TodosArray.map(todo =>
              <li key={todo.id} className="py-4 text-center flex justify-around border-b-2 bg-blue-300 mb-2 rounded-lg">
                <input type="checkbox" defaultChecked={todo.completed} />
                <p>{todo.text}</p>
                <button className="bg-red-400 text-white shadow-md py-1 px-2 rounded-md hover:bg-red-600 transition-all">
                  Delete
                </button>
              </li>
            )
          }
        </ul>

      </main>

    </section>
  )
}

export default App
