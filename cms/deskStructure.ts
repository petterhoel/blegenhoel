import { FcGoogle } from "react-icons/fc";
import { MdOutlinePermIdentity } from "react-icons/md";
import { IoText } from "react-icons/io5";

// @ts-ignore
export const deskStructure = (S) => {
  const biography = S.listItem()
    .title('Biografisk tekst')
    .child(S.document().schemaType('biography').documentId('biography'))
    .icon(MdOutlinePermIdentity)

  const aboutWorks = S.listItem()
    .title('Om Bildene')
    .child(S.document().schemaType('aboutWorks').documentId('aboutWorks'))
      .icon(IoText)


    const seo = S.listItem()
    .title('Google synlighet')
    .child(S.document().schemaType('seo').documentId('seo'))
    .icon(FcGoogle)
  
  const filterList = ['biography', 'aboutWorks', `seo`]

  const filteredNonSingles = S.documentTypeListItems().filter(
    // @ts-ignore
    (item) => !filterList.includes(item.getId()),
  )

  return S.list()
    .title('Innhold')
    .items([biography, aboutWorks, ...filteredNonSingles, seo])
}
