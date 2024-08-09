function TodoItem ({ title, complete }) {
  return (
    <li>
      <h2>{title}</h2>
      <input type="checkbox" defaultChecked={complete} />
    </li>
  )
}

export { TodoItem }
