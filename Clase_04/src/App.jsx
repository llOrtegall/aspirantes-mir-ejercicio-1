import './App.css'

export function App() {
  return (
    <article /*style={{ display: 'flex', alignItems: 'center', color: '#fff' }}*/>
      <header>
        <img alt="user avatar" src="https://unavatar.io/llOrTeGall" />
        <div>
          <strong>Ivan Ortega</strong>
          <span>@llOrTeGall</span>
        </div>
      </header>

      <aside>
        <button>
          Seguir
        </button>
      </aside>
    </article>
  )
}