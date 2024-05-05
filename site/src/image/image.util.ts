import { sanityConfig } from '../cms-integration/sanity.config'
import sanityImageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const { projectId, dataset } = sanityConfig

const imageUrlBuilder = sanityImageUrlBuilder({ projectId, dataset })

export function urlsForImage(source: SanityImageSource | undefined) {
  if (!source) {
    return []
  }
  return [
    imageUrlBuilder
      .image(source)
      .width(600)
      .quality(100)
      .sharpen(10)
      .format('webp')
      .url(),
    imageUrlBuilder
      .image(source)
      .width(600)
      .quality(70)
      .sharpen(10)
      .format('jpg')
      .url(),
  ]
}

export function extractWithHeughtFromUrl(url: string): ImageDimmentions {
  const splitPoint = url.lastIndexOf('-')
  const splitEnd = url.lastIndexOf('.')

  const dimmentionParts = url.substring(splitPoint + 1, splitEnd)

  const xDivider = dimmentionParts.indexOf('x')
  const width = +dimmentionParts.substring(0, xDivider)

  const height = +dimmentionParts.substring(xDivider + 1)

  return { width, height }
}

interface ImageDimmentions {
  width: number
  height: number
}
