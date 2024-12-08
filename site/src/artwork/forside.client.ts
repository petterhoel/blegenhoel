import groq from 'groq'
import { dataClient } from '../cms-integration/data.client'
import type {ForsideGallerierQueryResult} from "../cms-integration/cms-types.ts";

export async function getForsideGallerier() {
  const forsideGallerierQuery = groq`*[_type == "publishedGalleries"][0] {
  galleryList[]-> {
    'slug': gallerySlug.current,
    galleryName {no, en},
    'topImage': galleryImages[0]->
  }
}`
  const artworks = await dataClient.fetch<ForsideGallerierQueryResult>(forsideGallerierQuery)

  if (artworks?.galleryList) {
    return artworks.galleryList
  }
  return []
}
