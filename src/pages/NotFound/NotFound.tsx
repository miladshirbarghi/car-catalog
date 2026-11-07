import { BackToCatalog } from '@components/car-details/BackToCatalog'
import { DetailPage, EmptyState } from '@components/catalog/catalog.styled'

export default function NotFound() {
  return (
    <DetailPage>
      <BackToCatalog />
      <EmptyState>
        <h1>صفحه پیدا نشد</h1>
      </EmptyState>
    </DetailPage>
  )
}
