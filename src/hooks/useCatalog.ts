import { carData } from '@mock/data/carData'
import { useState } from 'react'

export function useCatalog() {
  const [query, setQuery] = useState('')
  const [favorites, setFavorites] = useState<number[]>([])
  const [favoritesOnly, setFavoritesOnly] = useState(false)
  const cars = carData.filter(car => {
    const matches = `${car.brand} ${car.model} ${car.year}`
      .toLowerCase()
      .includes(query.trim().toLowerCase())
    return matches && (!favoritesOnly || favorites.includes(car.id))
  })

  function toggleFavorite(id: number) {
    setFavorites(current =>
      current.includes(id)
        ? current.filter(item => item !== id)
        : [...current, id]
    )
  }

  return {
    query,
    setQuery,
    favorites,
    favoritesOnly,
    setFavoritesOnly,
    cars,
    toggleFavorite,
  }
}
