function TodoItem ({ title, complete }) {
  return (
    <li className={`p-2 rounded-md mb-2 w-full flex justify-start relative py-4 border-b-2 
      ${complete ? 'bg-green-200' : 'bg-red-200'}`}>
      <h2>{title}</h2>
      <input className="absolute right-6 top-6" type="checkbox" defaultChecked={complete} />
    </li>
  )
}

export { TodoItem }
