import { defineField, defineType } from 'sanity'
import { english, norsk } from './locales'

export const localeRichText = defineType({
  title: 'Localized string',
  name: 'localeRichText',
  type: 'object',
  fields: [
    defineField({
      title: 'Norsk',
      name: norsk,
      type: 'richText',
    }),
    defineField({
      title: 'Engelsk',
      name: english,
      type: 'richText',
    }),
  ],
})
