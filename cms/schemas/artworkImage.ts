export default {
  name: 'artworkImage',
  type: 'object',
  title: 'Foto av verk',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Foto',
    },
    {
      name: 'altNo',
      type: 'string',
      title: 'Beskrivende tekst norsk (for blinde)',
    },
    {
      name: 'altEn',
      type: 'string',
      title: 'Beskrivende tekst engelsk (for blinde)',
    },
  ],
}
