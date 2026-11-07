import CarDetails from '@pages/CarDetails/CarDetails'
import Catalog from '@pages/Catalog/Catalog'
import NotFound from '@pages/NotFound/NotFound'
import { BrowserRouter, Route, Routes } from 'react-router'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Catalog />} />
        <Route path='/car/:id' element={<CarDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
