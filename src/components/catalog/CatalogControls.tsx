import { Box, ButtonBase, InputBase } from '@mui/material'
import { Heart, Search } from 'lucide-react'

type Props = {
  query: string
  onQueryChange: (query: string) => void
  favoritesOnly: boolean
  onFavoritesOnlyChange: (value: boolean) => void
  favoritesCount: number
}

export default function CatalogControls({
  query,
  onQueryChange,
  favoritesOnly,
  onFavoritesOnlyChange,
  favoritesCount,
}: Props) {
  return (
    <Box className='catalog__controls'>
      <Box className='search'>
        <Search size={20} aria-hidden='true' />
        <InputBase
          type='search'
          placeholder='جستجوی خودرو'
          inputProps={{ 'aria-label': 'جستجوی خودرو' }}
          value={query}
          onChange={event => onQueryChange(event.target.value)}
        />
      </Box>
      <ButtonBase
        className={`filter ${favoritesOnly ? 'filter--active' : ''}`}
        type='button'
        aria-pressed={favoritesOnly}
        onClick={() => onFavoritesOnlyChange(!favoritesOnly)}
      >
        <Heart size={20} aria-hidden='true' /> علاقه‌مندی‌ها{' '}
        {favoritesCount > 0 && (
          <Box component='b'>
            {new Intl.NumberFormat('fa-IR').format(favoritesCount)}
          </Box>
        )}
      </ButtonBase>
    </Box>
  )
}
