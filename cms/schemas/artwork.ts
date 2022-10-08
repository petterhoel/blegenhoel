export const artwork = {
  name: 'artwork',
  type: 'document',
  title: 'Verk',
  fields: [
    {
      title: 'Tittel',
      name: 'title',
      type: 'localeString',
    },
    {
      title: 'Materiale/teknikk',
      name: 'material',
      type: 'localeString',
    },
    {
      title: 'År produsert',
      name: 'year',
      type: 'string',
    },
    {
      title: 'Dimmensjoner',
      name: 'dimmenstions',
      type: 'string',
    },
    {
      title: 'Bilde',
      name: 'photo',
      type: 'artworkImage',
    },
  ],
}
