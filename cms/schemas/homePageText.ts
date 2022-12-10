import { defineType, defineField } from 'sanity'

export const homepageText = defineType({
  name: 'homepageText',
  type: 'document',
  title: 'Forsidetekst',
  fields: [
    defineField({
      name: 'homepageText',
      type: 'localeRichText',
      title: 'Forsidetekst',
    }),
  ],
})
