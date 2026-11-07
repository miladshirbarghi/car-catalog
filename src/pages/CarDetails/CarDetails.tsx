import { Box } from '@mui/material'
import { BackToCatalog } from '@components/car-details/BackToCatalog'
import { CarDetailContent } from '@components/car-details/CarDetailContent'
import { CarNotFound } from '@components/car-details/CarNotFound'
import { useCarDetails } from '@hooks/useCarDetails'
import { CatalogStyles } from '@features/catalog/styles/CatalogStyles'

export default function CarDetails() {
  const car = useCarDetails()

  return (
    <CatalogStyles>
      <Box component='main' className='detail-page'>
        <BackToCatalog />
        {car ? <CarDetailContent car={car} /> : <CarNotFound />}
      </Box>
    </CatalogStyles>
  )
}
