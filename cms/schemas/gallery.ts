import { defineType, defineField } from 'sanity'


export const gallery = defineType({
    name: 'gallery',
    type: 'document',
    title: 'Bilder på forsiden',
    fields: [
      defineField({
        name: 'gallery',
        type: 'localeRichText',
        title: 'Bilder på forsiden',
      }),
    ],
  })