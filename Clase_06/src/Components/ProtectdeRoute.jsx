import { Navigate, Outlet } from 'react-router-dom'

export const ProtectdeRoute = ({ user, children, redirectTo = '/landing' }) => {
  if (!user) return <Navigate to={redirectTo} />

  return children || <Outlet />
}
