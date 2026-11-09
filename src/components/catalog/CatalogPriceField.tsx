import TextField from '@mui/material/TextField'
import type { CatalogFields } from '@validations/catalog.validation'
import type { FieldError, UseFormRegisterReturn } from 'react-hook-form'

type PriceFieldName = keyof Pick<CatalogFields, 'minPrice' | 'maxPrice'>

type Props = {
  id: string
  label: string
  name: PriceFieldName
  registration: UseFormRegisterReturn
  invalidInput: boolean
  error?: FieldError
  onPriceChange: (name: PriceFieldName, value: string) => string
}

export default function CatalogPriceField({
  id,
  label,
  name,
  registration,
  invalidInput,
  error,
  onPriceChange,
}: Props) {
  const { ref, ...inputProps } = registration

  return (
    <TextField
      id={id}
      label={label}
      size='small'
      inputRef={ref}
      {...inputProps}
      onChange={event => {
        event.target.value = onPriceChange(name, event.target.value)
        void registration.onChange(event)
      }}
      error={invalidInput || !!error}
      helperText={invalidInput ? 'فقط عدد وارد کنید.' : error?.message}
      slotProps={{ htmlInput: { inputMode: 'numeric' } }}
    />
  )
}
