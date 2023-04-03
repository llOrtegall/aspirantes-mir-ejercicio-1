export function TwitterFollowCard({ formatUserName, userName, name, isFollowing }) {

  console.log(isFollowing)
  const ImageSrc = `https://unavatar.io/${userName}`

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
        <button className='tw-followCard-button'>
          Seguir
        </button>
      </aside>
    </article>
  )
}