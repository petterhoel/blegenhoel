import { sanityConfig } from './sanity-config'
import sanityImageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const { projectId, dataset } = sanityConfig

const imageUrlBuilder = sanityImageUrlBuilder({ projectId, dataset })

export function urlForImage(source: SanityImageSource) {
  return imageUrlBuilder.image(source)
}
