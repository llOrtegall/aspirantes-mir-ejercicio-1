class ValidationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ValidationError'
  }
}

function ValidateNewTodo({ titulo, description }: { titulo: string, description: string }) {
  if (!titulo) throw new ValidationError('Título Es Requerido')
  if (!description) throw new ValidationError('Descripción Es Requerido')
  return true
}


export { ValidateNewTodo, ValidationError }
