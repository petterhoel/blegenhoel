import type { ArtworkDto } from './artwork.dto'
import { dataClient } from '../cms-integration/data.client'

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

