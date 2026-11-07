import Box from '@mui/material/Box'
import { DetailSection } from './car-details.styled'

type CarDescriptionProps = {
  description: string
}

export function CarDescription({ description }: CarDescriptionProps) {
  return (
    <DetailSection>
      <Box component='h2'>درباره این خودرو</Box>
      <Box component='p'>{description}</Box>
    </DetailSection>
  )
}
