import sanityImageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { sanityConfig } from '../cms-integration/sanity.config'

const { projectId, dataset } = sanityConfig

const imageUrlBuilder = sanityImageUrlBuilder({ projectId, dataset })

export function toDimmentionsAndUrls(source: SanityImageSource | undefined): {
  urls: string[]
  aspectRatio: ImageDimmentions
} {
  if (!source) {
    return {
      aspectRatio: { width: 1, height: 1 },
      urls: [],
    }
  }

  const webp = imageUrlBuilder
    .image(source)
    .width(600)
    .quality(100)
    .sharpen(10)
    .format('webp')
    .url()

  const jpg = imageUrlBuilder
    .image(source)
    .width(600)
    .quality(70)
    .sharpen(10)
    .format('jpg')
    .url()

  return {
    aspectRatio: extractWithHeightFromUrl(webp),
    urls: [webp, jpg],
  }
}

export function extractWithHeightFromUrl(url: string): ImageDimmentions {
  const splitPoint = url.lastIndexOf('-')
  const splitEnd = url.lastIndexOf('.')

  const dimmentionParts = url.substring(splitPoint + 1, splitEnd)

  const xDivider = dimmentionParts.indexOf('x')
  const width = +dimmentionParts.substring(0, xDivider)

  const height = +dimmentionParts.substring(xDivider + 1)

  return { width, height }
}

export interface ImageDimmentions {
  width: number
  height: number
}
