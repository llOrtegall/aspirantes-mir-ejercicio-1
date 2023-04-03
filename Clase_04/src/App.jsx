import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {

  // TODO: Podemos pasar un función como Prop
  const formatUserName = userName => `@${userName}`

  return (
    <section className='App'>
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowings
        userName='llOrTeGall'
        name='Ivan Ortega Garzon'
      />

      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        userName='midudev'
        name='Miguel Angel Duran'
      />

      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={true}
        userName='goncy'
        name='Goncy Eduardo Varas'
      />
    </section>
  )
}