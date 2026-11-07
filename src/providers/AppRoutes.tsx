import CarDetails from '@pages/CarDetails/CarDetails'
import Catalog from '@pages/catalog/Catalog'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Catalog />} />
        <Route path='/car/:id' element={<CarDetails />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  )
}
