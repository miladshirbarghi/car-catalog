import { Box, Link as MuiLink } from '@mui/material'
import { Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import type { Car } from '@app-types/car.type'

type Props = {
  car: Car
}

const number = new Intl.NumberFormat('fa-IR')

export default function CarCardFooter({ car }: Props) {
  return (
    <Box component='div' className='car-card__footer'>
      <Box component='div' className='car-card__price'>
        <Box component='span'>قیمت خودرو</Box>
        <Box component='strong'>
          {number.format(car.price)} <Box component='small'>تومان</Box>
        </Box>
      </Box>
      <MuiLink
        component={Link}
        className='details-link'
        to={`/car/${car.id}`}
        aria-label={`مشاهده جزئیات ${car.brand} ${car.model}`}
      >
        <Box component='span'>مشاهده جزئیات</Box>
        <ArrowLeft
          className='details-link__arrow'
          size={18}
          aria-hidden='true'
        />
      </MuiLink>
    </Box>
  )
}
