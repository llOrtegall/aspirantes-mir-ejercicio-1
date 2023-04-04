import { useState } from "react";

export function TwitterFollowCard({ formatUserName, userName, name, InitialisFollowing }) {

  /* //TODO: como funciona el useState
    * const state = useState(false)
    * const isFollowing = state[0]
    * const setIsFollowing = state[1]
  */
  const [isFollowing, setIsFollowing] = useState(InitialisFollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'

  const buttonClassname = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const ImageSrc = `https://unavatar.io/${userName}`

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article /*style={{ display: 'flex', alignItems: 'center', color: '#fff' }}*/
      className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' alt="user avatar"
          src={ImageSrc} />
        <div className='tw-followCard-info '>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassname} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar De Seguir</span>
        </button>
      </aside>
    </article>
  )
}