export const artworkTitleField = {
  name: 'title',
  type: 'string',
  title: 'Tittel',
}

export const artworkMaterialField = {
  name: 'material',
  type: 'string',
  title: 'Materiale',
}

export default {
  name: 'artworkInfo',
  type: 'document',
  title: 'Informasjon om verk',
  fields: [artworkTitleField, artworkMaterialField],
}
