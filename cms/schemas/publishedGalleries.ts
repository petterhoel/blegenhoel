import { defineField, defineType } from 'sanity'

export const publishedGalleries = defineType({
  name: 'publishedGalleries',
  type: 'document',
  title: 'Publiserte gallerier',
  fields: [
    defineField({
      name: 'galleryList',
      title: 'Gallerier på nettsiden',
      type: 'array',
      description:
        'Legg til eller fjern gallerier fra nettsiden og sorter rekkefølgen',
      of: [{ type: 'reference', to: [{ type: 'web-gallery' }] }],
      validation: (Rule) => Rule.unique(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Gallerier på nettsiden',
        subtitle: 'Sorter, legg til eller fjern gallerier',
      }
    },
  },
})
