import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import type { useCatalog } from '@hooks/useCatalog'
import { Heart, Search } from 'lucide-react'
import { Controller, useFormState } from 'react-hook-form'
import type { CatalogFields } from '@validations/catalog.validation'
import CatalogPriceField from './CatalogPriceField'
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

type SortOption = {
  value: CatalogFields['sort']
  label: string
}

const sortOptions = [
  { value: 'default', label: 'پیش‌فرض' },
  { value: 'ascending', label: 'ارزان‌ترین' },
  { value: 'descending', label: 'گران‌ترین' },
] satisfies readonly SortOption[]

export default function CatalogControls({
  form,
  updatePriceInUrl,
  invalidPriceInput,
  favoritesOnly,
  onFavoritesOnlyChange,
  favoritesCount,
}: Props) {
  const { register, control } = form
  const { errors } = useFormState({ control })
  const { ref, ...query } = register('query')
  const { ref: minPriceRef, ...minPrice } = register('minPrice', {
    deps: 'maxPrice',
  })
  const { ref: maxPriceRef, ...maxPrice } = register('maxPrice')
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
        <CatalogPriceField
          id='min-price'
          label='حداقل قیمت'
          name='minPrice'
          registration={{ ref: minPriceRef, ...minPrice }}
          invalidInput={invalidPriceInput.minPrice}
          error={errors.minPrice}
          onPriceChange={updatePriceInUrl}
        />
        <CatalogPriceField
          id='max-price'
          label='حداکثر قیمت'
          name='maxPrice'
          registration={{ ref: maxPriceRef, ...maxPrice }}
          invalidInput={invalidPriceInput.maxPrice}
          error={errors.maxPrice}
          onPriceChange={updatePriceInUrl}
        />
        <Controller
          name='sort'
          control={control}
          render={({ field }) => (
            <Autocomplete
              id='sort'
              options={sortOptions}
              value={
                sortOptions.find(option => option.value === field.value) ??
                sortOptions[0]
              }
              getOptionLabel={option => option.label}
              onChange={(_, option) =>
                field.onChange(option?.value ?? 'default')
              }
              onBlur={field.onBlur}
              disableClearable
              renderInput={params => (
                <TextField {...params} label='مرتب‌سازی' size='small' />
              )}
            />
          )}
        />
      </PriceControls>
    </Controls>
  )
}
