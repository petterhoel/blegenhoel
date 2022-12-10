import { defineType, defineField } from 'sanity'

export const biography = defineType({
  name: 'biography',
  type: 'document',
  title: 'Biografisk tekst',
  fields: [
    defineField({
      name: 'biography',
      type: 'localeRichText',
      title: 'Biografisk tekst',
    }),
  ],
})
