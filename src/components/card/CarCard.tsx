import { useReducedMotion } from 'motion/react'
import CarCardImage from './CarCardImage'
import CarCardIdentity from './CarCardIdentity'
import CarCardSpecs from './CarCardSpecs'
import CarCardFooter from './CarCardFooter'
import type { Car } from '@app-types/car.type'
import { CardBody, CardRoot } from '@components/catalog/catalog.styled'

type Props = {
  car: Car
  isFavorite: boolean
  onToggleFavorite: (id: number) => void
  eager?: boolean
}

export default function CarCard({
  car,
  isFavorite,
  onToggleFavorite,
  eager = false,
}: Props) {
  const reducedMotion = useReducedMotion()

  return (
    <CardRoot
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
      <CardBody>
        <CarCardIdentity car={car} />
        <CarCardSpecs car={car} />
        <CarCardFooter car={car} />
      </CardBody>
    </CardRoot>
  )
}
