import { Box } from '@mui/material'

type CarDescriptionProps = {
  description: string
}

export function CarDescription({ description }: CarDescriptionProps) {
  return (
    <Box component='section' className='detail__description'>
      <Box component='h2'>توضیحات</Box>
      <Box component='p'>{description}</Box>
    </Box>
  )
}
