import { useEffect, useState } from 'react'

export const App = () => {
  const [fact, setFac] = useState('aqui el app de gatitos')

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(data => setFac(data.fact))
  }, [])

  return (
    <main>
      <h1>App De Gatitos</h1>
      <p>{fact}</p>
    </main>
  )
}
