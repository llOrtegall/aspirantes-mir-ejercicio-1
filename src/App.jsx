import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_WORD = 'https://cataas.com/'
const CAT_ENDPOINT_RAMDON = 'https://catfact.ninja/fact'

export const App = () => {
  const [fact, setFac] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RAMDON)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFac(fact)

        const threefirstWord = fact.split(' ', 3)
        console.log(threefirstWord)

        fetch(`${CAT_ENDPOINT_WORD}/cat/says/${threefirstWord}?size=50&color=red&json=true`)
          .then(res => res.json())
          .then(response => {
            const { url } = response
            setImageUrl(`${CAT_ENDPOINT_WORD}${url}`)
          })
      })
  }, [])

  return (
    <main>
      <h1>App De Gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt='Image extracted using the firt worlds' />}
      </section>

    </main>
  )
}
