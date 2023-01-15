// @ts-ignore
export const deskStructure = (S) => {
  const biography = S.listItem()
    .title('Biografisk tekst')
    .child(S.document().schemaType('biography').documentId('biography'))

  const aboutWorks = S.listItem()
    .title('Om Bildene')
    .child(S.document().schemaType('aboutWorks').documentId('aboutWorks'))

  const filterList = ['biography', 'aboutWorks']

  const filteredNonSingles = S.documentTypeListItems().filter(
    // @ts-ignore
    (item) => !filterList.includes(item.getId()),
  )

  return S.list()
    .title('Innhold')
    .items([biography, aboutWorks, ...filteredNonSingles])
}
