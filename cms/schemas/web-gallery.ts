import { defineField, defineType, ValidationContext } from 'sanity'

interface GalleryVm {
  galleryId: string
  galleryName: string
  galleryImages: {
    imageId: string
    name: string
  }[]
}

const isNotAlreadyInDisplayedGallery = async (context: ValidationContext) => {
  const images = (context.document?.galleryImages ?? []) as {
    _id: string
    name: string
    _ref: string
  }[]
  const imageRefs = images.map((elm) => elm._ref) ?? []

  const currentId = context.document?._id.replace('drafts.', '')

  const client = context.getClient({ apiVersion: '2024-01-01' })
  const query = `*[_type == "web-gallery" && _id != '${currentId}']{
    'galleryId': _id,
    'galleryName': galleryName.no,
    'galleryImages':galleryImages[]-> {
      'imageId': _id,
      'name': title.no
  }}`
  const allOtherGalleries = await client.fetch<GalleryVm[]>(query)

  const publishedIdQuery = `*[_type == "publishedGalleries"][0]{
  'ids': galleryList[]._ref
}`
  const publishedIds = await client.fetch<{ ids: string[] }>(publishedIdQuery)
  const publishedGalleries = allOtherGalleries.filter((g) =>
    publishedIds.ids.some((pid) => pid === g.galleryId)
  )

  const galleriesWithDupes = publishedGalleries
    .filter((og: GalleryVm) =>
      imageRefs.some((ref: string) =>
        og.galleryImages.some(({ imageId }) => imageId === ref)
      )
    )
    .map((g) => ({
      galleryName: g.galleryName.trim(),
      imageNames: g.galleryImages
        .filter((i) => imageRefs.includes(i.imageId))
        .map((i) => i.name.trim()),
    }))
  if (!galleriesWithDupes.length) {
    return true
  }

  return toValidationMessage(galleriesWithDupes).join(', óg ')
}

const toValidationMessage = (
  dupes: { galleryName: string; imageNames: string[] }[]
) => {
  return dupes.map(
    (d) =>
      `"${d.imageNames.join('" og "')}" er allerede i galleriet "${d.galleryName}"`
  )
}

export const webGallery = defineType({
  name: 'web-gallery',
  title: 'Alle gallerier',
  description:
    'Både publiserte og ikke-publiserte gallerier. Bruk "Gallerier på nettsiden" for å styre hvilke gallerier som vises og rekkefølgen på de',
  type: 'document',
  fields: [
    defineField({
      name: 'galleryName',
      title: 'Navnet på galleriet',
      description: '(vises i menyen)',
      type: 'localeString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'galleryImages',
      title: 'Verk i galleriet',
      description: 'Sorter, legg til eller fjern bilder',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'artwork' }] }],
      validation: (rule) => [
        rule.required(),
        rule.unique(),
        rule
          .custom(
            async (_, context) => await isNotAlreadyInDisplayedGallery(context)
          )
          .warning(),
      ],
    }),
    defineField({
      name: 'gallerySlug',
      title: 'Del av url',
      description: '(nettsideaddresse)',
      type: 'slug',
      options: {
        source: 'galleryName.no',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input
            .toLowerCase()
            .replace('æ', 'ae')
            .replace('ø', 'oe')
            .replace('å', 'aa')
            // eslint-disable-next-line no-control-regex
            .replace(/[^\x00-\x7F]/g, '')
            .trim()
            .replace(/\s+/g, '-')
            .replace(/-+/, '-')
            .slice(0, 200),
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'galleryName',
      display: 'display',
      image: 'galleryImages.0.photo.image',
    },
    prepare(selection) {
      const { title, image } = selection
      return {
        title: title?.no ?? 'ingen tittel enda',
        media: image ?? null,
      }
    },
  },
})
