import Box from '@mui/material/Box'
import type { Car } from '@app-types/car.type'
import { CardSpecs } from '@components/catalog/catalog.styled'

type Props = {
  car: Car
}

const number = new Intl.NumberFormat('fa-IR')

export default function CarCardSpecs({ car }: Props) {
  return (
    <CardSpecs>
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
    </CardSpecs>
  )
}
