import type { FieldErrors, Resolver } from 'react-hook-form'
import * as yup from 'yup'

export type CatalogFields = {
  query: string
  minPrice: string
  maxPrice: string
  sort: 'default' | 'ascending' | 'descending'
}

export const normalizeDigits = (value: string) =>
  value.replace(/[۰-۹٠-٩]/g, digit =>
    String(digit.charCodeAt(0) - (digit >= '۰' ? 1776 : 1632))
  )

const price = yup
  .string()
  .defined()
  .test('price', 'قیمت باید عدد صحیح نامنفی باشد.', value => {
    const normalized = normalizeDigits(value.trim())
    return (
      normalized === '' ||
      (/^\d+$/.test(normalized) && Number.isSafeInteger(Number(normalized)))
    )
  })

export const catalogSchema = yup.object({
  query: yup.string().defined(),
  minPrice: price,
  maxPrice: price.test(
    'range',
    'حداکثر قیمت باید بیشتر یا مساوی حداقل قیمت باشد.',
    function (value) {
      const { minPrice } = this.parent as CatalogFields
      const min = normalizeDigits(minPrice.trim())
      const max = normalizeDigits(value.trim())
      return (
        !min ||
        !max ||
        !/^\d+$/.test(min) ||
        !/^\d+$/.test(max) ||
        Number(min) <= Number(max)
      )
    }
  ),
  sort: yup
    .mixed<CatalogFields['sort']>()
    .oneOf(['default', 'ascending', 'descending'])
    .defined(),
})

export const catalogResolver: Resolver<CatalogFields> = async values => {
  try {
    await catalogSchema.validate(values, { abortEarly: false })
    return { values, errors: {} }
  } catch (error) {
    if (!(error instanceof yup.ValidationError)) throw error
    const errors: FieldErrors<CatalogFields> = {}
    for (const issue of error.inner) {
      const name = issue.path as keyof CatalogFields
      if (name && !errors[name])
        errors[name] = {
          type: issue.type ?? 'validation',
          message: issue.message,
        }
    }
    return { values: {}, errors }
  }
}
