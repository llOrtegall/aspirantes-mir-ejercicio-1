const TURNOS = {
  X: 'x',
  O: 'o',
}

const TABLA = Array(9).fill(null)

export function App() {

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {
          TABLA.map((_, i) => {
            return (
              <div className="cell" key={i}>
                <span className="cell_content">
                  {i}
                </span>
              </div>
            )
          })
        }
      </section>
    </main>
  )
}

