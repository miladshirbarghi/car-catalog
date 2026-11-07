import { useState } from 'react'

export function useCarImage() {
  const [imageFailed, setImageFailed] = useState(false)

  function handleImageError() {
    setImageFailed(true)
  }

  return { imageFailed, handleImageError }
}
