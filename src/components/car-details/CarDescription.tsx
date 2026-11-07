import { DetailDescription } from '@components/catalog/catalog.styled'
import { Box } from '@mui/material'

type CarDescriptionProps = {
  description: string
}

export function CarDescription({ description }: CarDescriptionProps) {
  return (
    <DetailDescription>
      <Box component='h2'>توضیحات</Box>
      <Box component='p'>{description}</Box>
    </DetailDescription>
  )
}
