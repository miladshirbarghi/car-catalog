import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { expect, it } from 'vitest'
import App from './App'

it('renders the current placeholder screen', () => {
  expect(renderToStaticMarkup(createElement(App))).toContain('تست')
})
