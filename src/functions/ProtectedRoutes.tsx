import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const __isLoggedIn = true

    if (!__isLoggedIn) return <Navigate to={'/login'} />

    return <Outlet />
}

export default ProtectedRoutes