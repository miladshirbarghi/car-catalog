import { carData } from '@mock/data/carData'
import { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import {
  catalogResolver,
  catalogSchema,
  normalizeDigits,
} from '@validations/catalog.validation'
import type { CatalogFields } from '@validations/catalog.validation'

export function useCatalog() {
  const form = useForm<CatalogFields>({
    defaultValues: { query: '', minPrice: '', maxPrice: '', sort: 'default' },
    resolver: catalogResolver,
    mode: 'onChange',
  })
  const { query, minPrice, maxPrice, sort } = useWatch({
    control: form.control,
  }) as CatalogFields
  const [favorites, setFavorites] = useState<number[]>([])
  const [favoritesOnly, setFavoritesOnly] = useState(false)
  const validPrices = catalogSchema.isValidSync({
    query,
    minPrice,
    maxPrice,
    sort,
  })
  const min = minPrice.trim() ? Number(normalizeDigits(minPrice.trim())) : 0
  const max = maxPrice.trim()
    ? Number(normalizeDigits(maxPrice.trim()))
    : Infinity
  const cars = carData.filter(car => {
    const matches = `${car.brand} ${car.model} ${car.year}`
      .toLowerCase()
      .includes(query.trim().toLowerCase())
    return (
      matches &&
      (!favoritesOnly || favorites.includes(car.id)) &&
      (!validPrices || (car.price >= min && car.price <= max))
    )
  })
  if (sort !== 'default') {
    cars.sort((a, b) =>
      sort === 'ascending' ? a.price - b.price : b.price - a.price
    )
  }

  function toggleFavorite(id: number) {
    setFavorites(current =>
      current.includes(id)
        ? current.filter(item => item !== id)
        : [...current, id]
    )
  }

  return {
    form,
    favorites,
    favoritesOnly,
    setFavoritesOnly,
    cars,
    toggleFavorite,
  }
}
