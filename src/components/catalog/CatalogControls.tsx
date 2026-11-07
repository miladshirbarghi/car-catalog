import Box from '@mui/material/Box'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
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
  updatePriceInUrl: ReturnType<typeof useCatalog>['updatePriceInUrl']
  invalidPriceInput: ReturnType<typeof useCatalog>['invalidPriceInput']
  favoritesOnly: boolean
  onFavoritesOnlyChange: (value: boolean) => void
  favoritesCount: number
}

export default function CatalogControls({
  form,
  updatePriceInUrl,
  invalidPriceInput,
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
      <SearchRoot
        id='query'
        type='search'
        label='جستجوی خودرو'
        size='small'
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position='end'>
                <Search size={20} aria-hidden='true' />
              </InputAdornment>
            ),
          },
        }}
        inputRef={ref}
        {...query}
      />
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
          label='حداقل قیمت'
          size='small'
          inputRef={minPriceRef}
          {...minPrice}
          onChange={event => {
            event.target.value = updatePriceInUrl(
              'minPrice',
              event.target.value
            )
            void minPrice.onChange(event)
          }}
          error={invalidPriceInput.minPrice || !!errors.minPrice}
          helperText={
            invalidPriceInput.minPrice
              ? 'فقط عدد وارد کنید.'
              : errors.minPrice?.message
          }
          slotProps={{ htmlInput: { inputMode: 'numeric' } }}
        />
        <TextField
          id='max-price'
          label='حداکثر قیمت'
          size='small'
          inputRef={maxPriceRef}
          {...maxPrice}
          onChange={event => {
            event.target.value = updatePriceInUrl(
              'maxPrice',
              event.target.value
            )
            void maxPrice.onChange(event)
          }}
          error={invalidPriceInput.maxPrice || !!errors.maxPrice}
          helperText={
            invalidPriceInput.maxPrice
              ? 'فقط عدد وارد کنید.'
              : errors.maxPrice?.message
          }
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
          <Box component='option' value='default'>
            پیش‌فرض
          </Box>
          <Box component='option' value='ascending'>
            ارزان‌ترین
          </Box>
          <Box component='option' value='descending'>
            گران‌ترین
          </Box>
        </TextField>
      </PriceControls>
    </Controls>
  )
}
