import Box from '@mui/material/Box'
import CarCard from '@components/card/CarCard'
import CatalogControls from '@components/catalog/CatalogControls'
import CatalogHeader from '@components/catalog/CatalogHeader'
import CatalogIntro from '@components/catalog/CatalogIntro'
import {
  CarGrid,
  CatalogContainer,
  Collection,
  CollectionHeading,
  CatalogEnd,
  EmptyState,
  SectionLabel,
} from '@components/catalog/catalog.styled'
import { useCatalog } from '@hooks/useCatalog'

export default function Catalog() {
  const {
    form,
    updatePriceInUrl,
    invalidPriceInput,
    invalidPriceRange,
    cars,
    favorites,
    favoritesOnly,
    setFavoritesOnly,
    toggleFavorite,
  } = useCatalog()
  return (
    <CatalogContainer>
      <CatalogHeader />
      <CatalogIntro />
      <Collection id='collection'>
        <CollectionHeading>
          <Box>
            <SectionLabel>مجموعه خودروها</SectionLabel>
            <Box component='h2'>
              خودروها{' '}
              <Box component='small'>
                {new Intl.NumberFormat('fa-IR').format(cars.length)} خودرو
              </Box>
            </Box>
          </Box>
          <CatalogControls
            form={form}
            updatePriceInUrl={updatePriceInUrl}
            invalidPriceInput={invalidPriceInput}
            favoritesOnly={favoritesOnly}
            onFavoritesOnlyChange={setFavoritesOnly}
            favoritesCount={favorites.length}
          />
        </CollectionHeading>
        {cars.length ? (
          <CarGrid>
            {cars.map((car, index) => (
              <CarCard
                key={car.id}
                car={car}
                isFavorite={favorites.includes(car.id)}
                onToggleFavorite={toggleFavorite}
                eager={index === 0}
              />
            ))}
          </CarGrid>
        ) : (
          <EmptyState role='status'>
            {invalidPriceRange
              ? 'بازه قیمت معتبر نیست؛ حداقل و حداکثر قیمت را بررسی کنید.'
              : 'خودرویی با این مشخصات پیدا نشد.'}
          </EmptyState>
        )}
      </Collection>
      <CatalogEnd>
        <Box component='span'>اتوگالری</Box>
        <Box component='span'>انتخابی برای مسیر پیش رو</Box>
      </CatalogEnd>
    </CatalogContainer>
  )
}
