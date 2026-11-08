import { describe, expect, it } from 'vitest'
import { catalogSchema, normalizeDigits } from './catalog.validation'

const fields = { query: '', minPrice: '', maxPrice: '', sort: 'default' }

describe('catalog prices', () => {
  it('normalizes Persian and Arabic digits', () => {
    expect(normalizeDigits('۰۱۲۳۴۵۶۷۸۹ ٠١٢٣٤٥٦٧٨٩')).toBe(
      '0123456789 0123456789'
    )
  })

  it.each(['-1', '1.5', 'Infinity', '1e9', '9007199254740992'])(
    'rejects invalid or unsafe prices: %s',
    minPrice => {
      expect(catalogSchema.isValidSync({ ...fields, minPrice })).toBe(false)
    }
  )

  it('accepts empty bounds, zero and inclusive Persian ranges', () => {
    expect(catalogSchema.isValidSync(fields)).toBe(true)
    expect(catalogSchema.isValidSync({ ...fields, minPrice: '0' })).toBe(true)
    expect(
      catalogSchema.isValidSync({ ...fields, minPrice: '۱۰۰', maxPrice: '۱۰۰' })
    ).toBe(true)
  })

  it('rejects reversed ranges', () => {
    expect(
      catalogSchema.isValidSync({ ...fields, minPrice: '۲۰۰', maxPrice: '۱۰۰' })
    ).toBe(false)
  })
})
