import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_WORD = 'https://cataas.com/'
const CAT_ENDPOINT_RAMDON = 'https://catfact.ninja/fact'

export const App = () => {
  const [fact, setFac] = useState()
  const [imageUrl, setImageUrl] = useState()
  // const [factError, setFactError] = useState()

  // EFECTO PARA RECUPERAR LA CITA
  useEffect(() => {
    fetch(CAT_ENDPOINT_RAMDON)
      .then(res => res.json()
      )
      .then(data => {
        const { fact } = data
        setFac(fact)
      })
  }, [])

  // PARA RECUPERAR LA IMAGEN
  useEffect(() => {
    if (!fact) return
    const threefirstWord = fact.split(' ', 3)
    console.log(threefirstWord)
    fetch(`${CAT_ENDPOINT_WORD}/cat/says/${threefirstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])
  return (
    <main>
      <h1>App De Gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${CAT_ENDPOINT_WORD}${imageUrl}`} alt='Image extracted using the firt worlds' />}
      </section>

    </main>
  )
}
