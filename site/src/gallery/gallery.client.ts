import groq from 'groq'
import { dataClient } from '../cms-integration/data.client.ts'
import type {ArtworkImage, GalleryQueryResult} from "../cms-integration/cms-types.ts";
import { type LocaleStringVm, toLocaleStringVm} from "../cms-integration/locale-string.vm.ts";

export async function getGalleryBySlug(slug: string): Promise<GalleryQueryVm> {
  const galleryQuery = groq`coalesce(
  *[_type == "web-gallery" && gallerySlug.current == '${slug}'][0]{
    galleryImages[]->,
    galleryName
  }, 'no-result')`

  const gallery = await dataClient.fetch<GalleryQueryResult>(galleryQuery)
  return toGalleryVm(gallery)
}

function toGalleryVm(dto: GalleryQueryResult): GalleryQueryVm {
  if (dto === 'no-result') {
    throw new Error('Error getting gallery')
  }

  return {
    galleryName: toLocaleStringVm(dto.galleryName),
    galleryImages: dto.galleryImages.map((di) =>({
      title: toLocaleStringVm(di.title),
      material: toLocaleStringVm(di.material),
      year: di.year ?? '',
      dimensions: di.dimmenstions ?? '',
      photo: di.photo as ArtworkImage
    }))
  }
}

export interface GalleryQueryVm {
  galleryName: LocaleStringVm,
  galleryImages: {
    title: LocaleStringVm
    material: LocaleStringVm
    year: string
    dimensions: string
    photo: ArtworkImage
  }[],
}

export async function getAllGalleryPaths(): Promise<string[]> {
  const allGalleriesQuery = groq`*[_type == "publishedGalleries"][0]{
  'slugs': galleryList[]->gallerySlug.current
}`
  const result = await dataClient.fetch<{ slugs: string[] } | null>(
    allGalleriesQuery
  )
  if (result) {
    return result.slugs
  }
  return []
}
