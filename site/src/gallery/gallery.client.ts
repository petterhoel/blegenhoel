import groq from 'groq'
import { dataClient } from '../cms-integration/data.client.ts'
import type {
  ArtworkImage,
  LocaleString,
} from '../cms-integration/cms-types.ts'
import {
  type LocaleStringVm,
  toLocaleStringVm,
} from '../cms-integration/locale-string.vm.ts'

export async function getGalleryBySlug(slug: string): Promise<GalleryQueryVm> {
  // dropper denne siden sanity ikke klarer å forholde seg til '${slug}'
  // @sanity-typegen-ignore
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
    galleryImages: dto.galleryImages.map((di) => ({
      title: toLocaleStringVm(di.title),
      material: toLocaleStringVm(di.material),
      year: di.year ?? '',
      dimensions: di.dimmenstions ?? '',
      photo: di.photo as ArtworkImage,
    })),
  }
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

export interface GalleryQueryVm {
  galleryName: LocaleStringVm
  galleryImages: {
    title: LocaleStringVm
    material: LocaleStringVm
    year: string
    dimensions: string
    photo: ArtworkImage
  }[]
}

// Kommenter ut slug for å generere denne igjen
// Source: ../site/src/gallery/gallery.client.ts
// Variable: galleryQuery
// Query: coalesce(  *[_type == "web-gallery" && gallerySlug.current == 'sf'][0]{    galleryImages[]->,    galleryName  }, 'no-result')
export type GalleryQueryResult =
  | {
      galleryImages: Array<{
        _id: string
        _type: 'artwork'
        _createdAt: string
        _updatedAt: string
        _rev: string
        title?: LocaleString
        material?: LocaleString
        year?: string
        dimmenstions?: string
        photo: ArtworkImage
      }>
      galleryName: LocaleString
    }
  | 'no-result'
