import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='bg-slate-200'>
      <section className='flex justify-around py-3 bg-slate-100-900'>

        <figure className='flex gap-2'>
          <img className='w-32' src="gane.webp" alt="logo gane" />
          <article className='text-blue-900 font-semibold flex flex-col justify-end'>
            <p>Intranet</p>
            <p>Grupo Empresarial Servired & Multired</p>
          </article>
        </figure>

        <article className='text-center'>
          <p className='font-semibold'>Jueves 7 Marzo 2024</p>
          <p className='text-3xl'>2:41:02 PM</p>
        </article>

      </section>

      <ul className='flex justify-around py-2 bg-gradient-to-t from-blue-800 to-blue-500'>
        <li>
          <NavLink className='hover:text-yellow-400 text-white font-semibold' to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink className='hover:text-yellow-400 text-white font-semibold' to="/noticias">Noticias</NavLink>
        </li>
        <li>
          <NavLink className='hover:text-yellow-400 text-white font-semibold' to="/productos">Productos</NavLink>
        </li>
        <li>
          <NavLink className='hover:text-yellow-400 text-white font-semibold' to="/departamentos">Despartamentos</NavLink>
        </li>
        <li>
          <NavLink className='hover:text-yellow-400 text-white font-semibold' to="/aboutus">Quienes Somos</NavLink>
        </li>
        <li>
          <NavLink className='hover:text-yellow-400 text-white font-semibold' to="/ssgst">S.G.S.S.T</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export { NavBar }
