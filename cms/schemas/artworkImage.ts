export const artworkImage = {
  name: 'artworkImage',
  type: 'object',
  title: 'Foto av verk',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Avfotografert verk',
    },
    {
      name: 'alt',
      type: 'localeString',
      title: 'Beskrivende tekst (for blinde)',
    },
  ],
}
