import { Box, InputBase, TextField } from '@mui/material'
import type { useCatalog } from '@hooks/useCatalog'
import { Heart, Search } from 'lucide-react'
import {
  Controls,
  FilterButton,
  SearchRoot,
  PriceControls,
} from './catalog.styled'

type Props = {
  form: ReturnType<typeof useCatalog>['form']
  favoritesOnly: boolean
  onFavoritesOnlyChange: (value: boolean) => void
  favoritesCount: number
}

export default function CatalogControls({
  form,
  favoritesOnly,
  onFavoritesOnlyChange,
  favoritesCount,
}: Props) {
  const {
    register,
    formState: { errors },
  } = form
  const { ref, ...query } = register('query')
  const { ref: minPriceRef, ...minPrice } = register('minPrice', {
    deps: 'maxPrice',
  })
  const { ref: maxPriceRef, ...maxPrice } = register('maxPrice')
  const { ref: sortRef, ...sort } = register('sort')
  return (
    <Controls>
      <SearchRoot>
        <Search size={20} aria-hidden='true' />
        <InputBase
          type='search'
          placeholder='جستجوی خودرو'
          inputProps={{ 'aria-label': 'جستجوی خودرو' }}
          inputRef={ref}
          {...query}
        />
      </SearchRoot>
      <FilterButton
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
      </FilterButton>
      <PriceControls>
        <TextField
          id='min-price'
          label='حداقل قیمت (تومان)'
          size='small'
          inputRef={minPriceRef}
          {...minPrice}
          error={!!errors.minPrice}
          helperText={errors.minPrice?.message}
          slotProps={{ htmlInput: { inputMode: 'numeric' } }}
        />
        <TextField
          id='max-price'
          label='حداکثر قیمت (تومان)'
          size='small'
          inputRef={maxPriceRef}
          {...maxPrice}
          error={!!errors.maxPrice}
          helperText={errors.maxPrice?.message}
          slotProps={{ htmlInput: { inputMode: 'numeric' } }}
        />
        <TextField
          id='sort'
          select
          label='مرتب‌سازی'
          size='small'
          defaultValue='default'
          inputRef={sortRef}
          {...sort}
          slotProps={{ select: { native: true } }}
        >
          <option value='default'>پیش‌فرض</option>
          <option value='ascending'>ارزان‌ترین</option>
          <option value='descending'>گران‌ترین</option>
        </TextField>
      </PriceControls>
    </Controls>
  )
}
