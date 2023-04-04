import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  // TODO: Podemos pasar un función como Prop
  const formatUserName = userName => `@${userName}`

  const IvanOrtega = {
    userName: 'llOrTeGall',
    name: 'Ivan Ortega',
    formatUserName
  }

  return (
    <section className='App'>
      <TwitterFollowCard {...IvanOrtega} />

      <TwitterFollowCard
        formatUserName={formatUserName}
        userName='midudev'
        name='Miguel Angel Duran'
      />

      <TwitterFollowCard
        formatUserName={formatUserName}
        userName='goncy'
        name='Goncy Eduardo Varas'
      />
    </section>
  )
}