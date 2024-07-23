import { defineField, defineType } from 'sanity'

export const oldGallery = defineType({
  name: 'gallery',
  title: 'Gallerier',
  type: 'document',
  fields: [
    defineField({
      name: 'galleryImages',
      title: 'Verk i galleriet',
      description: 'Sorter, legg til eller fjern bilder',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'artwork' }] }],
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      name: 'galleryName',
      title: 'Navnet på galleriet',
      description: '(vises ikke noe sted)',
      type: 'string',
    }),
  ],
})

interface GalleryVm {
  display: boolean
  galleryImages: {
    _id: string
    name: string
  }[]
  galleryName: string
}

const isNotAlreadyInDisplayedGallery = async (elm, context) => {
  const thisGallery =
    context.document.galleryImages?.map((elm) => elm._ref) ?? []
  const currentId = context.document._id
  const client = context.getClient({ apiVersion: '2024-01-01' })
  const otherGalleries =
    (await client.fetch(`*[_type == "web-gallery" && _id != '${currentId}']{
	display,
	'galleryImages': galleryImages[]->{
	_id,
	'name': title.no
	}, 
	'galleryName': galleryName.no}`)) as GalleryVm[]

  const galleriesWithDupes = otherGalleries
    .filter((g: { display: boolean }) => g.display)
    .filter((og: { galleryImages: { _id: string }[] }) =>
      thisGallery.some((id: string) =>
        og.galleryImages.some((i: { _id: string }) => i._id === id),
      ),
    )
    .map((g) => ({
      galleryName: g.galleryName.trim(),
      imageNames: g.galleryImages
        .filter((i) => thisGallery.includes(i._id))
        .map((i) => i.name.trim()),
    }))
  if (!galleriesWithDupes.length) {
    return true
  }

  return toValidationMessage(galleriesWithDupes).join(', óg ')
}

const toValidationMessage = (
  dupes: { galleryName: string; imageNames: string[] }[],
) => {
  return dupes.map(
    (d) =>
      `"${d.imageNames.join('" og "')}" er allerede i galleriet "${d.galleryName}"`,
  )
}

export const webGallery = defineType({
  name: 'web-gallery',
  title: 'Alle gallerier',
  description: 'Både publiserte og ikke-publiserte gallerier. Bruk "Gallerier på nettsiden" for å styre hvilke gallerier som vises og rekkefølgen på de',
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
            async (value, context) =>
              await isNotAlreadyInDisplayedGallery(value, context),
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
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: title?.no ?? 'ingen tittel enda',
      }
    },
  },
})
