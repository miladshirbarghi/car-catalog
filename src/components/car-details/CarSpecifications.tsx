import { Box } from '@mui/material'
import type { Car } from '@app-types/car.type'
import { DetailSection, SpecsList } from './car-details.styled'

type CarSpecificationsProps = {
  car: Car
}

const number = new Intl.NumberFormat('fa-IR')
const year = new Intl.NumberFormat('fa-IR', { useGrouping: false })

export function CarSpecifications({ car }: CarSpecificationsProps) {
  return (
    <DetailSection>
      <Box component='h2'>مشخصات خودرو</Box>
      <SpecsList>
        <Box component='div'>
          <Box component='dt'>سال مدل</Box>
          <Box component='dd'>{year.format(car.year)}</Box>
        </Box>
        <Box component='div'>
          <Box component='dt'>کارکرد</Box>
          <Box component='dd'>{number.format(car.mileage)} کیلومتر</Box>
        </Box>
        <Box component='div'>
          <Box component='dt'>وضعیت بدنه</Box>
          <Box component='dd'>{car.accidentHistory}</Box>
        </Box>
      </SpecsList>
    </DetailSection>
  )
}
