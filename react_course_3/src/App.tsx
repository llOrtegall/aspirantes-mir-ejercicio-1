import { useEffect, useState } from "react"

function App() {
  const [erro, setErro] = useState(true)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log("empezando el efecto");

    if(!loading){
      setTimeout(() => {
        setLoading(false)

      }, 3000)
    }

    console.log("terminando el efecto");
  }, [loading])


  return (
    <>
      <h1>App</h1>
    </>
  )
}

export default App
