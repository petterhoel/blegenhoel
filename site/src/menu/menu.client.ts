import groq from 'groq'
import { dataClient } from '../cms-integration/data.client'

const menuQuery = groq`*[_type == "publishedGalleries"][0] {
  menuGalleries[]-> {
    galleryName {no, en},
    'slug' : gallerySlug.current
    }}`

export async function getGalleryMenuItems() {
  return await dataClient.fetch(menuQuery)
}
