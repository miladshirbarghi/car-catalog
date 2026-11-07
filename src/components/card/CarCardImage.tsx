import { Box, ButtonBase } from '@mui/material'
import { motion, useReducedMotion } from 'motion/react'
import { Heart } from 'lucide-react'
import type { Car } from '@app-types/car.type'
import { useCarImage } from '@hooks/useCarImage'

type Props = {
  car: Car
  isFavorite: boolean
  onToggleFavorite: (id: number) => void
  eager: boolean
}

const number = new Intl.NumberFormat('fa-IR', { useGrouping: false })

export default function CarCardImage({
  car,
  isFavorite,
  onToggleFavorite,
  eager,
}: Props) {
  const { imageFailed, handleImageError } = useCarImage()
  const reducedMotion = useReducedMotion()

  return (
    <Box component='div' className='car-card__image-wrap'>
      {imageFailed ? (
        <Box
          component='div'
          className='car-card__fallback'
          role='img'
          aria-label={`تصویر ${car.brand} ${car.model} در دسترس نیست`}
        >
          تصویر خودرو در دسترس نیست
        </Box>
      ) : (
        <Box
          component='img'
          className='car-card__image'
          src={car.image}
          alt={`${car.brand} ${car.model} مدل ${car.year}`}
          width='1448'
          height='1086'
          loading={eager ? 'eager' : 'lazy'}
          onError={handleImageError}
        />
      )}
      <Box component='span' className='car-card__year'>
        {number.format(car.year)}
      </Box>
      <ButtonBase
        className={`favorite ${isFavorite ? 'favorite--active' : ''}`}
        type='button'
        aria-label={`${isFavorite ? 'حذف از' : 'افزودن به'} علاقه‌مندی‌ها: ${car.brand} ${car.model}`}
        aria-pressed={isFavorite}
        onClick={() => onToggleFavorite(car.id)}
      >
        <Box
          component={motion.span}
          key={String(isFavorite)}
          initial={false}
          animate={reducedMotion ? {} : { scale: [1, 1.18, 1] }}
          transition={{ duration: 0.25 }}
          aria-hidden='true'
        >
          <Heart
            size={21}
            strokeWidth={1.7}
            fill={isFavorite ? 'currentColor' : 'none'}
          />
        </Box>
      </ButtonBase>
    </Box>
  )
}
