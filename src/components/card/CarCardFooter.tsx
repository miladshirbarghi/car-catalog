import { Box } from '@mui/material'
import { ArrowLeft } from 'lucide-react'
import type { Car } from '@app-types/car.type'
import {
  CardFooter,
  CardPrice,
  DetailsLink,
} from '@components/catalog/catalog.styled'

type Props = {
  car: Car
}

const number = new Intl.NumberFormat('fa-IR')

export default function CarCardFooter({ car }: Props) {
  return (
    <CardFooter>
      <CardPrice>
        <Box component='span'>قیمت خودرو</Box>
        <Box component='strong'>
          {number.format(car.price)} <Box component='small'>تومان</Box>
        </Box>
      </CardPrice>
      <DetailsLink
        to={`/car/${car.id}`}
        aria-label={`مشاهده جزئیات ${car.brand} ${car.model}`}
      >
        <Box component='span'>مشاهده جزئیات</Box>
        <ArrowLeft size={18} aria-hidden='true' />
      </DetailsLink>
    </CardFooter>
  )
}
