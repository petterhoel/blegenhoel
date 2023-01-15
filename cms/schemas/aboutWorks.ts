import { defineType, defineField } from 'sanity'

export const aboutWorks = defineType({
  name: 'aboutWorks',
  type: 'document',
  title: 'Om bildene',
  fields: [
    defineField({
      name: 'aboutWorks',
      type: 'localeRichText',
      title: 'Om bildene',
    }),
  ],
})
