import { Navigate } from 'react-router-dom'

export const ProtectdeRoute = ({ children, user, redirectTo = '/landing' }) => {
  if (!user) return <Navigate to={redirectTo} />

  return children
}
