import { useState } from "react";

export function TwitterFollowCard({ formatUserName, userName, name }) {

  /* //TODO: como funciona el useState
    * const state = useState(false)
    * const isFollowing = state[0]
    * const setIsFollowing = state[1]
  */
  const [isFollowing, setIsFollowing] = useState(false)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'

  const buttonClassname = isFollowing
    ? 'tw-followCard-button is-Following'
    : 'tw-followCard-button'

  console.log(isFollowing)
  const ImageSrc = `https://unavatar.io/${userName}`

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article /*style={{ display: 'flex', alignItems: 'center', color: '#fff' }}*/
      className='tw-followCard'>
      <header className='tw-followCard-Header'>
        <img className='tw-followCard-Img' alt="user avatar"
          src={ImageSrc} />
        <div className='tw-followCard-Info'>
          <strong>{name}</strong>
          <span className='tw-followCard-Username'>{formatUserName(userName)}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassname} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  )
}