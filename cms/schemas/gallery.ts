import { defineType, defineField } from 'sanity'

export const gallery = defineType({
  name: 'gallery',
  title: 'Galleri',
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
