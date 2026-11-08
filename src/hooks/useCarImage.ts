import { useState } from 'react'

type ImageStatus = 'loading' | 'loaded' | 'error'

export function useCarImage(source: string) {
  const [image, setImage] = useState<{ source: string; status: ImageStatus }>({
    source,
    status: 'loading',
  })
  const status = image.source === source ? image.status : 'loading'

  function updateStatus(next: ImageStatus) {
    setImage(current =>
      current.source === source && current.status === next
        ? current
        : { source, status: next }
    )
  }

  function handleImageLoad() {
    updateStatus('loaded')
  }

  function handleImageError() {
    updateStatus('error')
  }

  function imageRef(node: HTMLImageElement | null) {
    // Cached images may finish before React attaches the load listener.
    if (node?.complete) {
      updateStatus(node.naturalWidth > 0 ? 'loaded' : 'error')
    }
  }

  return {
    imageLoading: status === 'loading',
    imageFailed: status === 'error',
    handleImageLoad,
    handleImageError,
    imageRef,
  }
}
