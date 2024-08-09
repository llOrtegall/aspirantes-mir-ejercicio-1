function CreateTodoButton ({ nameNewTodo, setNameNewTodo, addTodo }) {
  return (
    <footer className="flex gap-2">
      <input type="text" placeholder="nuevo todo" value={nameNewTodo}
        onChange={ev => setNameNewTodo(ev.target.value)} className="p-2 border border-blue-600 rounded-lg" />
      <button className="bg-green-400 p-2 px-4 rounded-md font-bold hover:bg-blue-400 transition-all"
        onClick={() => addTodo()}> + </button>
    </footer>

  )
}

export { CreateTodoButton }
