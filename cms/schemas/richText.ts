import { defineType } from 'sanity'

export const richText = defineType({
  name: 'richText',
  type: 'array',
  title: 'Rik tekst',
  of: [
    {
      type: 'block',
    },
  ],
})
