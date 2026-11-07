import { Box } from '@mui/material'
import type { Car } from '@app-types/car.type'
import { useCarImage } from '@hooks/useCarImage'
import { CarDescription } from './CarDescription'
import { CarSpecifications } from './CarSpecifications'
import {
  Detail,
  DetailEyebrow,
  DetailHero,
  DetailImage,
  DetailSections,
  DetailSummary,
  PricePanel,
} from './car-details.styled'

type CarDetailContentProps = {
  car: Car
}

const number = new Intl.NumberFormat('fa-IR')
const year = new Intl.NumberFormat('fa-IR', { useGrouping: false })

export function CarDetailContent({ car }: CarDetailContentProps) {
  const { imageFailed, handleImageError } = useCarImage()

  return (
    <Detail>
      <DetailHero>
        <DetailImage>
          {imageFailed ? (
            <Box
              role='img'
              aria-label={`تصویر ${car.brand} ${car.model} در دسترس نیست`}
            >
              تصویر خودرو در دسترس نیست
            </Box>
          ) : (
            <Box
              component='img'
              src={car.image}
              alt={`${car.brand} ${car.model} مدل ${year.format(car.year)}`}
              width='1448'
              height='1086'
              onError={handleImageError}
            />
          )}
          <Box component='span'>مدل {year.format(car.year)}</Box>
        </DetailImage>
        <DetailSummary>
          <DetailEyebrow>جزئیات خودرو</DetailEyebrow>
          <Box component='h1' dir='ltr'>
            {car.brand} {car.model}
          </Box>
          <Box component='p'>نگاهی دقیق‌تر به مشخصات این خودرو</Box>
          <PricePanel>
            <Box component='span'>قیمت خودرو</Box>
            <Box component='strong'>
              {number.format(car.price)} <Box component='small'>تومان</Box>
            </Box>
          </PricePanel>
        </DetailSummary>
      </DetailHero>
      <DetailSections>
        <CarSpecifications car={car} />
        <CarDescription description={car.description} />
      </DetailSections>
    </Detail>
  )
}
