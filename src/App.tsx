import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { Layout } from "./components/Layout"

function App() {
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route path="/" element={<HomePage />} />
        <Route path="/noticias" element={<h1>Noticias</h1>} />
        <Route path="/productos" element={<h1>Productos</h1>} />
        <Route path="/departamentos" element={<h1>Departamentos</h1>} />
        <Route path="/aboutus" element={<h1>Quienes Somos</h1>} />
        <Route path="/ssgst" element={<h1>S.G.S.S.T</h1>} />
      </Route>

    </Routes>
  )
}

export default App
