function TodoSearch ({ search, setSearch }) {
  return (
    <input
      className='p-2 rounded-md border border-blue-500'
      placeholder="Buscar" value={search}
      onChange={ev => setSearch(ev.target.value)}
    />
  )
}

export { TodoSearch }
