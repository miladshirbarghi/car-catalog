import { Box, Link as MuiLink } from '@mui/material'
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { useCarDetails } from '@hooks/useCarDetails'
import { CatalogStyles } from '@features/catalog/styles/CatalogStyles'

export default function CarDetails() {
  const car = useCarDetails()
  const number = new Intl.NumberFormat('fa-IR')
  const year = new Intl.NumberFormat('fa-IR', { useGrouping: false })
  return (
    <CatalogStyles>
      <Box component='main' className='detail-page'>
        <MuiLink component={Link} className='back-link' to='/'>
          <ArrowRight size={18} aria-hidden='true' /> بازگشت به مجموعه
        </MuiLink>
        {car ? (
          <Box component='article' className='detail'>
            <Box
              component='img'
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              width='1448'
              height='1086'
            />
            <Box component='div'>
              <Box component='p' className='section-label'>
                <Box component='span' /> جزئیات خودرو
              </Box>
              <Box component='h1' dir='ltr'>
                {car.brand} {car.model}
              </Box>
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
              <Box component='section' className='detail__description'>
                <Box component='h2'>توضیحات</Box>
                <Box component='p'>{car.description}</Box>
              </Box>
            </Box>
          </Box>
        ) : (
          <Box component='div' className='empty-state'>
            <Box component='h1'>خودرو پیدا نشد</Box>
            <Box component='p'>این خودرو در مجموعه موجود نیست.</Box>
          </Box>
        )}
      </Box>
    </CatalogStyles>
  )
}
