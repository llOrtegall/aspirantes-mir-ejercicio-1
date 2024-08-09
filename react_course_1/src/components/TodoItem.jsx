import { TrashIcons } from '../components/icons/Trash'

function TodoItem ({ id, title, complete, fun, completeTodo }) {
  return (
    <li className={`p-2 rounded-md mb-2 w-full flex justify-around relative py-4 border-b-2 
      ${complete ? 'bg-green-200' : 'bg-red-200'}`}>
      <h2 className=''>{title}</h2>
      <input className="absolute left-4 top-6 " type="checkbox" defaultChecked={complete} onChange={() => completeTodo(id)} />

      <button className='hover:text-red-600 bg-white rounded-full p-1' onClick={() => fun(id)}>
        <TrashIcons />
      </button>
    </li>
  )
}

export { TodoItem }
