import { Box } from '@mui/material'
import type { Car } from '@app-types/car.type'

type CarSpecificationsProps = {
  car: Car
}

export function CarSpecifications({ car }: CarSpecificationsProps) {
  const number = new Intl.NumberFormat('fa-IR')
  const year = new Intl.NumberFormat('fa-IR', { useGrouping: false })

  return (
    <Box component='dl'>
      <Box component='div'>
        <Box component='dt'>مدل</Box>
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
      <Box component='div'>
        <Box component='dt'>قیمت</Box>
        <Box component='dd'>{number.format(car.price)} تومان</Box>
      </Box>
    </Box>
  )
}
