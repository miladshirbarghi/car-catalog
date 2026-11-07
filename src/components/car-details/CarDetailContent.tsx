import { Box } from '@mui/material'
import type { Car } from '@app-types/car.type'
import { CarDescription } from './CarDescription'
import { CarSpecifications } from './CarSpecifications'

type CarDetailContentProps = {
  car: Car
}

export function CarDetailContent({ car }: CarDetailContentProps) {
  return (
    <Box component='article' className='detail'>
      <Box
        component='img'
        src={car.image}
        alt={`${car.brand} ${car.model}`}
        width='1448'
        height='1086'
      />
      <Box component='div'>
        <Box component='p' className='section-label'>
          <Box component='span' /> جزئیات خودرو
        </Box>
        <Box component='h1' dir='ltr'>
          {car.brand} {car.model}
        </Box>
        <CarSpecifications car={car} />
        <CarDescription description={car.description} />
      </Box>
    </Box>
  )
}
