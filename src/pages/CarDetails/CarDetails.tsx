import { BackToCatalog } from '@components/car-details/BackToCatalog'
import { CarDetailContent } from '@components/car-details/CarDetailContent'
import { CarNotFound } from '@components/car-details/CarNotFound'
import { DetailPage } from '@components/car-details/car-details.styled'
import { useCarDetails } from '@hooks/useCarDetails'

export default function CarDetails() {
  const car = useCarDetails()
  return (
    <DetailPage>
      <BackToCatalog />
      {car ? <CarDetailContent car={car} /> : <CarNotFound />}
    </DetailPage>
  )
}
