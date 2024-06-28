import { defineField, defineType } from 'sanity'
import { english, norsk } from './locales'

export const localeString = defineType({
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  fields: [
    defineField({
      title: 'Norsk',
      name: norsk,
      type: 'string',
    }),
    defineField({
      title: 'Engelsk',
      name: english,
      type: 'string',
    }),
  ],
})
