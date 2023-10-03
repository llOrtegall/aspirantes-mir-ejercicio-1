import { useState } from "react"

const TURNOS = {
  X: 'x',
  O: 'o',
}

// eslint-disable-next-line react/prop-types
const Cuadrado = ({ children, isSelect, actualizaTabla, index }) => {
  const className = `square ${isSelect ? 'is-selected' : ''}`

  return (
    <div className={className}>
      {children}
    </div>
  )
}

export function App() {

  const [tabla, setTabla] = useState(Array(9).fill(null))
  const [turno, setTurno] = useState(TURNOS.X)

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {
          tabla.map((_, index) => {
            return (
              <Cuadrado key={index}
                index={index}>
                {tabla[index]}
              </Cuadrado>
            )
          })
        }
      </section>
      <section className="turn">
        <Cuadrado isSelect={turno === TURNOS.X}>
          {TURNOS.X}
        </Cuadrado>
        <Cuadrado isSelect={turno === TURNOS.O}>
          {TURNOS.O}
        </Cuadrado>
      </section>
    </main>
  )
}

