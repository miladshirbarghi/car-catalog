import { Link as MuiLink } from '@mui/material'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'

export function BackToCatalog() {
  return (
    <MuiLink component={Link} className='back-link' to='/'>
      <ArrowRight size={18} aria-hidden='true' /> بازگشت به مجموعه
    </MuiLink>
  )
}
