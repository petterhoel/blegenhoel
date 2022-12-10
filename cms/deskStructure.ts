// @ts-ignore
export const deskStructure = (S) => {
  const biography = S.listItem()
    .title('Biografisk tekst')
    .child(S.document().schemaType('biography').documentId('biography'))

  const homepageText = S.listItem()
    .title('Forsidetekst')
    .child(S.document().schemaType('homepageText').documentId('homepageText'))

  const filterList = ['biography', 'homepageText']

  const filteredNonSingles = S.documentTypeListItems().filter(
    // @ts-ignore
    (item) => !filterList.includes(item.getId()),
  )

  return S.list()
    .title('Innhold')
    .items([...filteredNonSingles, biography, homepageText])
}
