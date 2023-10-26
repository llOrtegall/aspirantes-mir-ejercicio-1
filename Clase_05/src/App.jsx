import { useState } from "react"

const TURNOS = {
  X: 'x',
  O: 'o',
}



// eslint-disable-next-line react/prop-types
const Cuadrado = ({ children, actualizaTabla, index }) => {
  return (
    <div className="square">
      {children}
    </div>
  )
}

export function App() {

  const [tabla, setTabla] = useState(Array(9).fill(null))

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {
          tabla.map((_, index) => {
            return (
              <Cuadrado key={index}
                index={index}>
                {index}
              </Cuadrado>
            )
          })
        }
      </section>
    </main>
  )
}

