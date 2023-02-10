import { defineType, defineField } from 'sanity'

export const artwork = defineType({
  name: 'artwork',
  type: 'document',
  title: 'Bildebank',
  fields: [
    defineField({
      title: 'Tittel',
      name: 'title',
      type: 'localeString',
    }),
    defineField({
      title: 'Materiale/teknikk',
      name: 'material',
      type: 'localeString',
    }),
    defineField({
      title: 'År produsert',
      name: 'year',
      type: 'string',
    }),
    defineField({
      title: 'Dimmensjoner',
      name: 'dimmenstions',
      type: 'string',
    }),
    defineField({
      title: 'Bilde',
      name: 'photo',
      type: 'artworkImage',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'year',
      image: 'photo.image',
    },
    prepare(selection) {
      const { title, subtitle, image } = selection

      return {
        title: title.no,
        subtitle,
        media: image,
      }
    },
  },
})
