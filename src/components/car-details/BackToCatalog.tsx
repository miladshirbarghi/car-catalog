import { BackLink } from './car-details.styled'
import { ArrowRight } from 'lucide-react'

export function BackToCatalog() {
  return (
    <BackLink to='/'>
      <ArrowRight size={18} aria-hidden='true' /> بازگشت به مجموعه
    </BackLink>
  )
}
