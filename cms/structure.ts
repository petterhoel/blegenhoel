import { ImagesIcon, SearchIcon, TextIcon } from '@sanity/icons'
import { ListItemBuilder } from 'sanity/lib/structure'
import type { StructureBuilder } from 'sanity/structure'
import { publishedGalleries } from './schemas/publishedGalleries'

export const singletonTypes = [
  'biography',
  'aboutWorks',
  'seo',
  'gallery',
  'publishedGalleries',
]

export const structure = (S: StructureBuilder) => {
  const biography = S.listItem()
    .title('Biografisk tekst')
    .icon(TextIcon)
    .child(S.document().schemaType('biography').documentId('biography'))

  const aboutWorks = S.listItem()
    .title('Om bildene')
    .icon(TextIcon)
    .child(S.document().schemaType('aboutWorks').documentId('aboutWorks'))

  const homePage = S.listItem()
    .title('Forsidegalleri')
    .icon(ImagesIcon)
    .child(S.document().schemaType('gallery').documentId('gallery'))

  const publishedGalleries = S.listItem()
    .title('Gallerier på nettsiden')
    .icon(ImagesIcon)
    .child(
      S.document()
        .schemaType('publishedGalleries')
        .documentId('publishedGalleries')
    )

  const seo = S.listItem()
    .title('Søkemotor synlighet (SEO)')
    .icon(SearchIcon)
    .child(S.document().schemaType('seo').documentId('seo'))

  const filteredNonSingles = S.documentTypeListItems().filter(
    (item) => !singletonTypes.includes(item.getId() ?? '')
  )
  // .filter((item) => item.getId() !== 'web-gallery')

  return S.list()
    .id('main')
    .items([
      homePage,
      publishedGalleries,
      biography,
      aboutWorks,
      S.divider(),
      ...filteredNonSingles,
      S.divider(),
      seo,
    ])
}
