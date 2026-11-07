import { BrowserRouter, Navigate, Route, Routes } from 'react-router'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/car' replace />} />
        <Route path='/car' element={<div>تست</div>} />
        <Route path='*' element={<Navigate to='/car' replace />} />
      </Routes>
    </BrowserRouter>
  )
}
