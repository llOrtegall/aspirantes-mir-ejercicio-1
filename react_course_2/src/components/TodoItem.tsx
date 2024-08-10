import { type TodoItemI } from "../types/Todo"

interface PropsTodoItem extends TodoItemI {
  updateItem: (id: number) => void
  deleteItem: (id: number) => void
  completeTodo: (id: number) => void
}

function TodoItem({id, completed, description, title, updateItem, deleteItem, completeTodo }: PropsTodoItem) {
  return (
    <li key={id} className={`py-4 text-center flex justify-around border-b-2 mb-2 rounded-lg ${completed ? 'bg-green-200' : 'bg-red-200'}`}>
      <p>{id}</p>
      <input type="checkbox" defaultChecked={completed} onChange={() => completeTodo(id)}/>
      <h3>{title}</h3>
      <p>{description}</p>
      <button disabled={completed} className={`bg-yellow-600 text-white shadow-md py-1 px-2 rounded-md ${completed ? 'bg-gray-200': 'hover:bg-yellow-400 transition-all'}`} onClick={() => updateItem(id)}>
        Editar
      </button>
      <button disabled={completed} className={`bg-red-400 text-white shadow-md py-1 px-2 rounded-md ${completed ? 'bg-gray-200': 'hover:bg-red-600 transition-all'}`} onClick={() => deleteItem(id)}>
        Delete
      </button>
    </li>
  )
}

export { TodoItem }
