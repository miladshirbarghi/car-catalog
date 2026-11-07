import { Box } from '@mui/material'
import type { Car } from '@app-types/car.type'
import { CarDescription } from './CarDescription'
import { CarSpecifications } from './CarSpecifications'
import { Detail, SectionLabel } from '@components/catalog/catalog.styled'

type CarDetailContentProps = {
  car: Car
}

export function CarDetailContent({ car }: CarDetailContentProps) {
  return (
    <Detail>
      <Box
        component='img'
        src={car.image}
        alt={`${car.brand} ${car.model}`}
        width='1448'
        height='1086'
      />
      <Box component='div'>
        <SectionLabel>
          <Box component='span' /> جزئیات خودرو
        </SectionLabel>
        <Box component='h1' dir='ltr'>
          {car.brand} {car.model}
        </Box>
        <CarSpecifications car={car} />
        <CarDescription description={car.description} />
      </Box>
    </Detail>
  )
}
