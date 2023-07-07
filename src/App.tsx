import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoutes from './functions/ProtectedRoutes'
import PageHome from './components/pages/home/PageHome'
import PageLogin from './components/pages/login/PageLogin'
import Page404 from './components/pages/404/Page404'

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path='/' element={<Navigate to='/home' />} />

        <Route path='/home' element={<PageHome />} />
      </Route>

      <Route path='/login' element={<PageLogin />} />

      <Route path='/404' element={<Page404 />} />

      <Route path='*' element={<Navigate to='/404' />} />
    </Routes>
  </BrowserRouter>
}

export default App
