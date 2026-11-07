import Box from '@mui/material/Box'
import type { Car } from '@app-types/car.type'
import {
  CardIdentity,
  CardNumber,
  Eyebrow,
} from '@components/catalog/catalog.styled'

type Props = {
  car: Car
}

const number = new Intl.NumberFormat('fa-IR')

export default function CarCardIdentity({ car }: Props) {
  return (
    <CardIdentity>
      <Box component='div'>
        <Eyebrow>خودروی سواری</Eyebrow>
        <Box component='h2' dir='ltr'>
          {car.brand} <Box component='span'>{car.model}</Box>
        </Box>
      </Box>
      <CardNumber>{number.format(car.id).padStart(2, '۰')}</CardNumber>
    </CardIdentity>
  )
}
