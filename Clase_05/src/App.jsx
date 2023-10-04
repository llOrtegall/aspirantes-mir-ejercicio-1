import { useState } from "react"

const TURNOS = {
  X: 'x',
  O: 'o',
}

// eslint-disable-next-line react/prop-types
const Cuadrado = ({ children, isSelect, actualizaTabla, index }) => {
  const className = `square ${isSelect ? 'is-selected' : ''}`
  const handleClick = () => {
    actualizaTabla(index)
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const COMBINACION_GANADORA = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

export function App() {

  const [tabla, setTabla] = useState(Array(9).fill(null))
  const [turno, setTurno] = useState(TURNOS.X)
  const [ganador, setGanador] = useState(null)

  const verGanador = (tablaRevisada) => {
    for (const combo of COMBINACION_GANADORA) {
      const [a, b, c] = combo
      if (
        tablaRevisada[a] &&
        tablaRevisada[a] === tablaRevisada[b] &&
        tablaRevisada[a] === tablaRevisada[c]
      ) {
        return tablaRevisada[a]
      }
    }
    return null
  }

  const updateBoard = (index) => {
    // TODO: si ya tiene algo
    if (tabla[index] || ganador) return

    // TODO: Actualizar el tablero
    const newTabla = [...tabla]
    newTabla[index] = turno // x u o
    setTabla(newTabla)

    // TODO: Cambiar el turno
    const newTurno = turno === TURNOS.X ? TURNOS.O : TURNOS.X
    setTurno(newTurno)

    //TODO: Revisamos si alguien gano
    const newGanador = verGanador(newTabla)
    if (newGanador) {
      setGanador(newGanador) // ???
      alert(`El ganador Es: ${newGanador}`)
    }

    //TODO: Revisamos si nadie gana
  }

  const resetearJuego = () => {
    setTabla(Array(9).fill(null));
    setTurno(TURNOS.X);
    setGanador(null);
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {
          tabla.map((_, index) => {
            return (
              <Cuadrado key={index}
                index={index}
                actualizaTabla={updateBoard}
              >
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

      <section>
        {
          ganador !== null && (
            <section className="winner">
              <div className="text">
                <h2>
                  {
                    ganador === false
                      ? 'Empate'
                      : 'Gano: '
                  }
                </h2>

                <header className="win">
                  {ganador && <Cuadrado>{ganador}</Cuadrado>}
                </header>

                <footer>
                  <button onClick={resetearJuego}>
                    Empezar De Nuevo
                  </button>
                </footer>
              </div>
            </section>
          )
        }
      </section>
    </main>
  )
}

