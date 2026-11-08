import { renderToStaticMarkup } from 'react-dom/server'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import ThemeProvider from '@providers/ThemeProvider'
import Catalog from './Catalog'

describe('Catalog', () => {
  it.each([
    '?minPrice=9000000000&maxPrice=8000000000',
    '?minPrice=9007199254740992',
  ])('does not silently ignore an invalid price range: %s', search => {
    const html = renderToStaticMarkup(
      <ThemeProvider>
        <MemoryRouter initialEntries={[`/${search}`]}>
          <Catalog />
        </MemoryRouter>
      </ThemeProvider>
    )

    expect(html).not.toMatch(/href="\/car\//)
    expect(html).toContain('بازه قیمت معتبر نیست')
  })

  it('restores Persian digits from the URL', () => {
    const html = renderToStaticMarkup(
      <ThemeProvider>
        <MemoryRouter
          initialEntries={['/?minPrice=۸۰۰۰۰۰۰۰۰۰&maxPrice=۹۰۰۰۰۰۰۰۰۰']}
        >
          <Catalog />
        </MemoryRouter>
      </ThemeProvider>
    )

    expect(html).toContain('href="/car/1"')
    expect(html).not.toContain('href="/car/2"')
  })

  it('renders the search, filters and car details links', () => {
    const html = renderToStaticMarkup(
      <ThemeProvider>
        <MemoryRouter>
          <Catalog />
        </MemoryRouter>
      </ThemeProvider>
    )

    expect(html).toMatch(/<label\b[^>]*for="query"[^>]*>جستجوی خودرو<\/label>/)
    expect(html).toContain('حداقل قیمت')
    expect(html).toContain('حداکثر قیمت')
    expect(html).toContain('مرتب‌سازی')
    expect(html).toMatch(
      /<option\b[^>]*value="ascending"[^>]*>ارزان‌ترین<\/option>/
    )
    expect(html).toContain('aria-pressed="false"')
    expect(html).toContain('href="/car/1"')
  })

  it('restores price filters from the URL', () => {
    const html = renderToStaticMarkup(
      <ThemeProvider>
        <MemoryRouter
          initialEntries={['/?minPrice=8000000000&maxPrice=9000000000']}
        >
          <Catalog />
        </MemoryRouter>
      </ThemeProvider>
    )

    expect(html).toContain('href="/car/1"')
    expect(html).not.toContain('href="/car/2"')
    expect(html).not.toContain('href="/car/8"')
  })
})
