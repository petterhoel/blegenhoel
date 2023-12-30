import { StructureBuilder } from "sanity/desk";
import { TextIcon, ImagesIcon, SearchIcon } from "@sanity/icons";
export const singletonTypes = ["biography", "aboutWorks", `seo`, "gallery"];

// @ts-ignore
export const structure = (S: StructureBuilder) => {
  const biography = S.listItem()
    .title("Biografisk tekst")
    .icon(TextIcon)
    .child(S.document().schemaType("biography").documentId("biography"));

  const aboutWorks = S.listItem()
    .title("Om bildene")
    .icon(TextIcon)
    .child(S.document().schemaType("aboutWorks").documentId("aboutWorks"));

  const homePage = S.listItem()
    .title("Forsidegalleri")
    .icon(ImagesIcon)
    .child(S.document().schemaType("gallery").documentId("gallery"));

  const seo = S.listItem()
    .title("Søkemotor synlighet (SEO)")
    .icon(SearchIcon)
    .child(S.document().schemaType("seo").documentId("seo"));

  const filteredNonSingles = S.documentTypeListItems().filter(
    (item) => !singletonTypes.includes(item.getId() ?? ""),
  );

  return S.list()
    .title("Innhold")
    .items([homePage, biography, aboutWorks, ...filteredNonSingles, seo]);
};
