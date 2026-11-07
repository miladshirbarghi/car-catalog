import Catalog from '@pages/Catalog/Catalog'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

const CarDetails = lazy(() => import('@pages/CarDetails/CarDetails'))
const NotFound = lazy(() => import('@pages/NotFound/NotFound'))

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p role='status'>در حال بارگذاری صفحه...</p>}>
        <Routes>
          <Route path='/' element={<Catalog />} />
          <Route path='/car/:id' element={<CarDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
