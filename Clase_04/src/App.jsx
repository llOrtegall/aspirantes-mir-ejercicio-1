import { useState } from 'react';
import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  const [name, setName] = useState('llOrtegall')

  // TODO: Podemos pasar un función como Prop
  const formatUserName = userName => `@${userName}`

  const IvanOrtega = {
    InitialisFollowing: true,
    userName: 'llOrTeGall',
    name: 'Ivan Ortega',
    formatUserName
  }

  return (
    <>
      <section className='App'>
        <TwitterFollowCard {...IvanOrtega} />

        <TwitterFollowCard
          InitialisFollowing={false}
          formatUserName={formatUserName}
          userName={name}
          name='Miguel Angel Duran'
        />

        <TwitterFollowCard
          InitialisFollowing
          formatUserName={formatUserName}
          userName='goncy'
          name='Goncy Eduardo Varas'
        />
      </section>
      <button onClick={() => setName('midudev')}>
        Cambiar Nombre
      </button>
    </>
  )
}