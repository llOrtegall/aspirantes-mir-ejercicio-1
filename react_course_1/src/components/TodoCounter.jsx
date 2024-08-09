function TodoCounter ({ total, completed }) {
  return (
    <h1 className="flex text-xl font-semibold">Has Completado { total } de { completed }</h1>
  )
}

export { TodoCounter }
