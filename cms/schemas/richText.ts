import { defineType } from 'sanity'

export const richText = defineType({
  name: 'richText',
  type: 'array',
  of: [
    {
      type: 'block',
    },
  ],
})
