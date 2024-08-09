function TodoList (props) {
  return (
    <ul className="bg-blue-200 p-8 rounded-lg flex flex-col w-96">
      {props.children}
    </ul>
  )
}

export { TodoList }
