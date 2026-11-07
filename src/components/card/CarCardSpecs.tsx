import { Box } from '@mui/material'
import type { Car } from '@app-types/car.type'

type Props = {
  car: Car
}

const number = new Intl.NumberFormat('fa-IR')

export default function CarCardSpecs({ car }: Props) {
  return (
    <Box component='div' className='car-card__specs'>
      <Box component='div'>
        <Box component='span'>کارکرد</Box>
        <Box component='strong'>
          {number.format(car.mileage)} <Box component='small'>کیلومتر</Box>
        </Box>
      </Box>
      <Box component='div'>
        <Box component='span'>وضعیت بدنه</Box>
        <Box component='strong'>{car.accidentHistory}</Box>
      </Box>
    </Box>
  )
}
