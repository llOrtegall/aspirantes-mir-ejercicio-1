import { Navigate, Outlet } from 'react-router-dom'

export const ProtectdeRoute = ({ isAllowed, children, redirectTo = '/landing' }) => {
  if (!isAllowed) return <Navigate to={redirectTo} />

  return children || <Outlet />
}
