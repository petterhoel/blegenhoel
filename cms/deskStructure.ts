import S from '@sanity/desk-tool/structure-builder'

const biography = S.listItem()
  .title('Biografisk tekst')
  .child(S.document().schemaType('biography').documentId('biography'))

const homepageText = S.listItem()
  .title('Forsidetekst')
  .child(S.document().schemaType('homepageText').documentId('homepageText'))

const filterList = ['biography', 'homepageText']

const filteredNonSingles = S.documentTypeListItems().filter(
  (item) => !filterList.includes(item.getId()),
)

export default () =>
  S.list()
    .title('Innhold')
    .items([...filteredNonSingles, biography, homepageText])
