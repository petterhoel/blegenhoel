import groq from 'groq'
import type { MenuQueryResult } from '../cms-integration/cms-types'
import { dataClient } from '../cms-integration/data.client'

export async function getGalleryMenuItems(): Promise<MenuQueryResult> {
  const menuQuery = groq`*[_type == "publishedGalleries"][0] {
  galleryList[]-> {
    galleryName {no, en},
    'slug' : gallerySlug.current
    }}`
  return await dataClient.fetch<MenuQueryResult>(menuQuery)
}
