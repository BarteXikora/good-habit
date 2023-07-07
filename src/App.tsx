import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoutes from './functions/ProtectedRoutes'

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path='/' element={<Navigate to='/home' />} />

        <Route path='/home' element={null} />
      </Route>

      <Route path='/login' element={null} />

      <Route path='*' element={null} />
    </Routes>
  </BrowserRouter>
}

export default App
