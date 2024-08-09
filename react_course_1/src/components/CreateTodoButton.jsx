function CreateTodoButton () {
  return (
    <button className="bg-green-400 p-2 px-4 rounded-md font-bold hover:bg-blue-400 transition-all" onClick={(ev) => console.log(ev)}>
      +
    </button>
  )
}

export { CreateTodoButton }
