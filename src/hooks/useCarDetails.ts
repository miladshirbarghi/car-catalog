import { carData } from '@mock/data/carData'
import { useParams } from 'react-router'

export function useCarDetails() {
  const { id } = useParams()
  return carData.find(car => String(car.id) === id)
}
