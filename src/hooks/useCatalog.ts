import { carData } from '@mock/data/carData'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'
import { useForm, useWatch } from 'react-hook-form'
import {
  catalogResolver,
  catalogSchema,
  normalizeDigits,
} from '@validations/catalog.validation'
import type { CatalogFields } from '@validations/catalog.validation'

function priceFromUrl(value: string | null) {
  const price = normalizeDigits(value ?? '')
  return /^\d+$/.test(price) ? price : ''
}

export function useCatalog() {
  const [searchParams, setSearchParams] = useSearchParams()
  const urlMinPrice = priceFromUrl(searchParams.get('minPrice'))
  const urlMaxPrice = priceFromUrl(searchParams.get('maxPrice'))
  const form = useForm<CatalogFields>({
    defaultValues: {
      query: '',
      minPrice: urlMinPrice,
      maxPrice: urlMaxPrice,
      sort: 'default',
    },
    resolver: catalogResolver,
    mode: 'onChange',
  })
  const { query, minPrice, maxPrice, sort } = useWatch({
    control: form.control,
  }) as CatalogFields
  const { getValues, setValue } = form
  useEffect(() => {
    // URL navigation may change the fields, but local edits already updated them.
    if (getValues('minPrice') !== urlMinPrice) {
      setValue('minPrice', urlMinPrice, { shouldValidate: true })
    }
    if (getValues('maxPrice') !== urlMaxPrice) {
      setValue('maxPrice', urlMaxPrice, { shouldValidate: true })
    }
  }, [getValues, setValue, urlMinPrice, urlMaxPrice])

  const [invalidPriceInput, setInvalidPriceInput] = useState({
    minPrice: false,
    maxPrice: false,
  })

  function updatePriceInUrl(name: 'minPrice' | 'maxPrice', input: string) {
    const normalized = normalizeDigits(input)
    const value = normalized.replace(/[^0-9]/g, '')
    const invalid = normalized !== value
    setInvalidPriceInput(current =>
      current[name] === invalid ? current : { ...current, [name]: invalid }
    )
    const next = new URLSearchParams(searchParams)
    if (value) next.set(name, normalizeDigits(value))
    else next.delete(name)
    if (next.toString() !== searchParams.toString()) {
      setSearchParams(next, { replace: true, preventScrollReset: true })
    }
    return value
  }

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
  const normalizedQuery = normalizeDigits(query.trim()).toLowerCase()
  const cars = carData.filter(car => {
    const matches = `${car.brand} ${car.model} ${car.year}`
      .toLowerCase()
      .includes(normalizedQuery)
    return (
      matches &&
      (!favoritesOnly || favorites.includes(car.id)) &&
      validPrices &&
      car.price >= min &&
      car.price <= max
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
    updatePriceInUrl,
    invalidPriceInput,
    invalidPriceRange: !validPrices,
    favorites,
    favoritesOnly,
    setFavoritesOnly,
    cars,
    toggleFavorite,
  }
}
