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

  // TODO: Renderizado de Objectos
  const Users = [
    {
      userName: 'Andrea34',
      name: 'Andrea Sandoval Martinez',
      InitialisFollowing: true,
      formatUserName: formatUserName
    },
    {
      userName: 'Sebastian23',
      name: 'Sebastian Paloma',
      InitialisFollowing: false,
      formatUserName: formatUserName
    },
    {
      userName: 'Elonmusk',
      name: 'Elon Musk Variante',
      InitialisFollowing: true,
      formatUserName: formatUserName
    },
  ]

  return (
    <>
      <section className='App'>
        {Users.map(user => {
          const { userName, name, InitialisFollowing, formatUserName } = user
          return (
            <TwitterFollowCard key={userName}
              InitialisFollowing={InitialisFollowing}
              userName={userName}
              name={name}
              formatUserName={formatUserName}
            />
          )
        })}
      </section>

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