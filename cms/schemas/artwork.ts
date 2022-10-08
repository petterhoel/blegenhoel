import artworkInfo, {
  artworkMaterialField,
  artworkTitleField,
} from './artworkInfo'

export default {
  name: 'artwork',
  type: 'document',
  title: 'Verk',
  fields: [
    {
      name: 'photo',
      type: 'artworkImage',
      title: 'Bilde',
    },
    {
      ...artworkTitleField,
      title: 'Tittel (norsk)',
    },
    {
      ...artworkMaterialField,
      title: 'Materiale (norsk)',
    },
    {
      name: 'engelskInfo',
      type: 'artworkInfo',
      title: 'Informasjon på engelsk',
    },
    {
      name: 'year',
      type: 'string',
      title: 'År produsert',
    },
    {
      name: 'dimmenstions',
      type: 'string',
      title: 'Dimmensjoner',
    },
  ],
}
