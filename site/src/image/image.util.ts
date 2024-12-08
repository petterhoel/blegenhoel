import sanityImageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { sanityConfig } from '../cms-integration/sanity.config'

const { projectId, dataset } = sanityConfig

const imageUrlBuilder = sanityImageUrlBuilder({ projectId, dataset })

export function toDimmentionsAndUrls(
  source: SanityImageSource | undefined | null
): {
  urls: string[]
  aspectRatio: ImageDimensions
} {
  if (!source) {
    return {
      aspectRatio: { width: 1, height: 1, orientation: orientation(1, 1) },
      urls: [],
    }
  }

  const baseImg = imageUrlBuilder.image(source).url()

  const aspectRatio = extractDimmentionsFromUrl(baseImg)

  const isLandscapeOrientation = aspectRatio.orientation === 'landscape'
  const longestSideMax = 600

  const builderLadscape = imageUrlBuilder.image(source).width(longestSideMax)

  const builderPortrait = imageUrlBuilder.image(source).height(longestSideMax)

  const builder = isLandscapeOrientation ? builderLadscape : builderPortrait

  const webp = builder.quality(100).sharpen(12).format('webp').url()

  const jpg = builder.quality(85).sharpen(12).format('jpg').url()

  return {
    aspectRatio,
    urls: [webp, jpg],
  }
}

export function extractDimmentionsFromUrl(url: string): ImageDimensions {
  const splitPoint = url.lastIndexOf('-')
  const splitEnd = url.lastIndexOf('.')

  const dimmentionParts = url.substring(splitPoint + 1, splitEnd)

  const xDivider = dimmentionParts.indexOf('x')
  const width = +dimmentionParts.substring(0, xDivider)

  const height = +dimmentionParts.substring(xDivider + 1)

  return { width, height, orientation: orientation(width, height) }
}

function orientation(width: number, height: number): ImageOrientation {
  return width > height ? 'landscape' : 'portrait'
}

export type ImageOrientation = 'landscape' | 'portrait'

export interface ImageDimensions {
  width: number
  height: number
  orientation: ImageOrientation
}
