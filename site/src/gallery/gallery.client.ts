import groq from 'groq'
import { dataClient } from '../cms-integration/data.client.ts'

export async function getGalleryBySlug(slug: string) {
  const galleryQuery = groq`*[_type == "web-gallery" && gallerySlug.current == '${slug}'][0]{
  galleryImages[]->,
  galleryName {en,no}
}`

  return await dataClient.fetch(galleryQuery)
}

export async function getAllGalleryPaths(): Promise<string[]> {
  const allGalleriesQuery = groq`*[_type == "publishedGalleries"][0]{
  'slugs': galleryList[]->gallerySlug.current
}`
  const restult = await dataClient.fetch<{ slugs: string[] } | null>(
    allGalleriesQuery
  )
  if (restult) {
    return restult.slugs
  }
  return []
}
