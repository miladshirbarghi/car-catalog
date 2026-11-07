import CarCard from '@components/card/CarCard'
import CatalogControls from '@components/catalog/CatalogControls'
import CatalogHeader from '@components/catalog/CatalogHeader'
import CatalogIntro from '@components/catalog/CatalogIntro'
import { CatalogStyles } from '@features/catalog/styles/CatalogStyles'
import { useCatalog } from '@hooks/useCatalog'
import { Box } from '@mui/material'
import { AnimatePresence } from 'motion/react'

export default function Catalog() {
  const {
    query,
    setQuery,
    favorites,
    favoritesOnly,
    setFavoritesOnly,
    cars,
    toggleFavorite,
  } = useCatalog()
  return (
    <CatalogStyles>
      <Box component='main' className='catalog'>
        <CatalogHeader />
        <CatalogIntro />
        <Box
          component='section'
          className='catalog__collection'
          aria-labelledby='collection-title'
        >
          <Box component='div' className='collection-heading'>
            <Box component='div'>
              <Box component='p' className='section-label'>
                <Box component='span' /> کشف مجموعه
              </Box>
              <Box component='h2' id='collection-title'>
                خودروهای موجود{' '}
                <Box component='small'>
                  {new Intl.NumberFormat('fa-IR').format(cars.length)} خودرو
                </Box>
              </Box>
            </Box>
            <CatalogControls
              query={query}
              onQueryChange={setQuery}
              favoritesOnly={favoritesOnly}
              onFavoritesOnlyChange={setFavoritesOnly}
              favoritesCount={favorites.length}
            />
          </Box>
          {cars.length === 0 ? (
            <Box component='div' className='empty-state'>
              <Box component='strong'>خودرویی پیدا نشد</Box>
              <Box component='p'>
                جستجو یا انتخاب علاقه‌مندی‌ها را تغییر دهید.
              </Box>
            </Box>
          ) : null}
          <Box component='div' className='car-grid'>
            <AnimatePresence initial={false}>
              {cars.map((car, index) => (
                <CarCard
                  key={car.id}
                  car={car}
                  isFavorite={favorites.includes(car.id)}
                  onToggleFavorite={toggleFavorite}
                  eager={index < 3}
                />
              ))}
            </AnimatePresence>
          </Box>
        </Box>
        <Box component='footer' className='catalog__end'>
          با اطمینان، مسیر تازه‌ای را شروع کنید.{' '}
          <Box component='span'>اتوگالری ◈</Box>
        </Box>
      </Box>
    </CatalogStyles>
  )
}
