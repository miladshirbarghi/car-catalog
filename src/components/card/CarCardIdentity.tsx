import { Box } from '@mui/material'
import type { Car } from '@app-types/car.type'

type Props = {
  car: Car
}

const number = new Intl.NumberFormat('fa-IR')

export default function CarCardIdentity({ car }: Props) {
  return (
    <Box component='div' className='car-card__identity'>
      <Box component='div'>
        <Box component='p' className='eyebrow'>
          خودروی سواری
        </Box>
        <Box component='h2' dir='ltr'>
          {car.brand} <Box component='span'>{car.model}</Box>
        </Box>
      </Box>
      <Box component='span' className='car-card__number'>
        {number.format(car.id).padStart(2, '۰')}
      </Box>
    </Box>
  )
}
