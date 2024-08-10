import { type TodoItemI } from "../types/Todo"

function TodoItem({id, completed, description, title }: TodoItemI) {
  return (
    <li key={id} className="py-4 text-center flex justify-around border-b-2 bg-blue-300 mb-2 rounded-lg">
      <input type="checkbox" defaultChecked={completed} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="bg-red-400 text-white shadow-md py-1 px-2 rounded-md hover:bg-red-600 transition-all">
        Delete
      </button>
    </li>
  )
}

export { TodoItem }
