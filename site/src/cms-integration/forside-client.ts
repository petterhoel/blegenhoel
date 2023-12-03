import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import type { I18nString } from '../i18n/i18n-string.dto.ts'
import { dataClient } from './data-client.ts'

export async function getForsideArtworks(): Promise<ArtworkDto[]> {
  const query = `*[_type == "gallery" && _id == 'gallery'][0]{galleryImages[]->}`
  const artworks = await dataClient.fetch<{
    galleryImages: ArtworkDto[] | undefined
  }>(query)
  if (artworks?.galleryImages) {
    return artworks.galleryImages
  }
  return []
}

export interface ArtworkDto {
  dimmenstions: string
  material: I18nString
  photo: { alt: I18nString; image: SanityImageSource }
  title: I18nString
  year: string
}
