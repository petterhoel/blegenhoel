import { sanityConfig } from './sanity-config'
import sanityImageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const { projectId, dataset } = sanityConfig

const imageUrlBuilder = sanityImageUrlBuilder({ projectId, dataset })

export function urlForImage(source: SanityImageSource) {
  return imageUrlBuilder.image(source)
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
