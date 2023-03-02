import { useEffect, useState } from 'react'

export const App = () => {
  const [fact, setFac] = useState('aqui el app de gatitos')

  const [] = useEffect()

  return (
    <main>
      <h1>App De Gatitos</h1>
      <p>{fact}</p>
    </main>
  )
}
