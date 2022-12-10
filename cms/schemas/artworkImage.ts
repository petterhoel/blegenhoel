import { defineType, defineField } from 'sanity'

export const artworkImage = defineType({
  name: 'artworkImage',
  type: 'object',
  title: 'Foto av verk',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'Avfotografert verk',
    }),
    defineField({
      name: 'alt',
      type: 'localeString',
      title: 'Beskrivende tekst (for blinde)',
    }),
  ],
})
