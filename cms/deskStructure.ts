// @ts-ignore
export const deskStructure = (S) => {
  const biography = S.listItem()
    .title('Biografisk tekst')
    .child(S.document().schemaType('biography').documentId('biography'))

  const aboutWorks = S.listItem()
    .title('Om Bildene')
    .child(S.document().schemaType('aboutWorks').documentId('aboutWorks'))

  const homePage = S.listItem()
    .title('Forsidegalleri')
    .child(S.document().schemaType('gallery').documentId('gallery'))

  const filterList = ['biography', 'aboutWorks', 'gallery']

  const filteredNonSingles = S.documentTypeListItems().filter(
    // @ts-ignore
    (item) => !filterList.includes(item.getId()),
  )

  return S.list()
    .title('Innhold')
    .items([homePage, biography, aboutWorks, ...filteredNonSingles])
}
