import groq from 'groq'
import { dataClient } from '../cms-integration/data.client'
import type { ArtworkDto } from './artwork.dto'

export async function getForsideArtworks(): Promise<ArtworkDto[]> {
  const artworkQuery = groq`*[_type == "gallery" && _id == 'gallery'][0]{galleryImages[]->}`
  const artworks = await dataClient.fetch<{
    galleryImages: ArtworkDto[] | undefined
  }>(artworkQuery)
  if (artworks?.galleryImages) {
    return artworks.galleryImages
  }
  return []
}

export async function getForsideGallerier() {
  const forsideGallerierQuery = groq`*[_type == "publishedGalleries"][0] {
  galleryList[]-> {
    'slug': gallerySlug.current,
    galleryName {no, en},
    'topImage': galleryImages[0]->
  }
}`
  const artworks = await dataClient.fetch(forsideGallerierQuery)

  if (artworks?.galleryList) {
    return artworks.galleryList
  }
  return []
}
