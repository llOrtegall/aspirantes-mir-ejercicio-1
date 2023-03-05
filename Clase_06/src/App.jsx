import { Landing, Admin, Analytics, Dashboard, Home } from './Pages/index'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import { ProtectdeRoute } from './Components/ProtectdeRoute'

import { useState } from 'react'

export function App () {
  const [user, setUser] = useState(null)

  const login = () => setUser({ id: 1, name: 'Ivan Ortega', permissions: ['analize'], roles: [''] })
  const logOut = () => setUser(null)

  return (
    <BrowserRouter>

      <Navigation />

      {
        user
          ? (<button onClick={logOut}>Logout</button>)
          : <button onClick={login}>Login</button>
      }

      <Routes>
        <Route index element={<Landing />} />
        <Route path='/landing' element={<Landing />} />

        <Route element={<ProtectdeRoute isAllowed={!!user} />}>
          <Route path='/home' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>

        <Route path='/analytics' element={
          <ProtectdeRoute
            isAllowed={!!user && user.permissions.includes('analize')}
            redirectTo='/home' >
            <Analytics />
          </ProtectdeRoute>
        } />
        <Route path='/admin' element={
          <ProtectdeRoute
            isAllowed={!!user && user.roles.includes('admin')}
            redirectTo='/home' >
            <Admin />
          </ProtectdeRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

function Navigation () {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/landing'>Landing</Link>
        </li>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link to='/analytics'>Analytics</Link>
        </li>
        <li>
          <Link to='/admin'>Admin</Link>
        </li>
      </ul>
    </nav>
  )
}
