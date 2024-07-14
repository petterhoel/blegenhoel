import { defineField, defineType } from 'sanity'

export const publishedGalleries = defineType({
  name: 'publishedGalleries',
  type: 'document',
  title: 'Publiserte gallerier',
  fields: [
    defineField({
      name: 'menuGalleries',
      title: 'Gallerier på nettsiden',

      type: 'array',
      description: 'Sorter, legg til eller fjern gallerier',
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
