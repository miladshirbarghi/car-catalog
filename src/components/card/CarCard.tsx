import { Box, Link as MuiLink } from '@mui/material'
import { Link } from 'react-router'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowLeft } from 'lucide-react'
import CarCardImage from './CarCardImage'
import type { Car } from '@app-types/car.type'

type Props = {
  car: Car
  isFavorite: boolean
  onToggleFavorite: (id: number) => void
  eager?: boolean
}

const number = new Intl.NumberFormat('fa-IR')

export default function CarCard({
  car,
  isFavorite,
  onToggleFavorite,
  eager = false,
}: Props) {
  const reducedMotion = useReducedMotion()

  return (
    <Box
      component={motion.article}
      className='car-card'
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <CarCardImage
        car={car}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        eager={eager}
      />
      <Box component='div' className='car-card__body'>
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
      </Box>
    </Box>
  )
}
