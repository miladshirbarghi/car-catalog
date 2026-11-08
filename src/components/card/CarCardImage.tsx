import Box from '@mui/material/Box'
import ImageSkeleton from '@components/shared/ImageSkeleton'
import { motion, useReducedMotion } from 'motion/react'
import { Heart } from 'lucide-react'
import type { Car } from '@app-types/car.type'
import { useCarImage } from '@hooks/useCarImage'
import {
  CardFallback,
  CardImage,
  CardImageWrap,
  CardYear,
  FavoriteButton,
} from '@components/catalog/catalog.styled'

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
  const {
    imageLoading,
    imageFailed,
    handleImageLoad,
    handleImageError,
    imageRef,
  } = useCarImage(car.image)
  const reducedMotion = useReducedMotion()

  return (
    <CardImageWrap>
      {imageFailed ? (
        <CardFallback
          role='img'
          aria-label={`تصویر ${car.brand} ${car.model} در دسترس نیست`}
        >
          تصویر خودرو در دسترس نیست
        </CardFallback>
      ) : (
        <CardImage
          ref={imageRef}
          src={car.image}
          onLoad={handleImageLoad}
          style={{ opacity: imageLoading ? 0 : 1 }}
          alt={`${car.brand} ${car.model} مدل ${car.year}`}
          width='1448'
          height='1086'
          loading={eager ? 'eager' : 'lazy'}
          onError={handleImageError}
        />
      )}
      {imageLoading && <ImageSkeleton />}
      <CardYear>{number.format(car.year)}</CardYear>
      <FavoriteButton
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
      </FavoriteButton>
    </CardImageWrap>
  )
}
