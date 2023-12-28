import { defineField, defineType } from "sanity";

const exhibitionTypes = [
  "separatutstilling",
  "duo-utstilling",
  "trio-utstilling",
  "gruppeutstilling",
];

export const exhibition = defineType({
  name: "exhibition",
  title: "Utstillinger",
  type: "document",
  fields: [
    defineField({
      name: "exhibitionName",
      title: "Navn",
      description: "Hva het utstillingen?",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "visibility",
      title: "Synlighet",
      description: "Skal utstillingen listes opp på nettsiden?",
      initialValue: true,
      type: "boolean",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "spaceName",
      title: "Utstillingssted",
      description: "Hvor fant utstillingen sted? (feks: MoMA, New York)",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: "string",
      name: "type",
      title: "Utstillingstype",
      initialValue: "",
      description: "Hva slags utstilling var det?",
      options: {
        list: exhibitionTypes,
      },
    }),
    defineField({
      type: "date",
      name: "exhibitionFirstDay",
      title: "Dagen utstillingen startet",
      options: {
        dateFormat: "DD.MM.YYYY",
      },
      description:
        "Brukes til å sortere utstillingene i omvendt kronologisk rekkefølge på nettsiden",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: "date",
      name: "exhibitionLastDay",
      title: "Dagen utstillingen sluttet",
      options: {
        dateFormat: "DD.MM.YYYY",
      },
      description: "Valgfri. Kun for å huske når utstillingen sluttet",
    }),
  ],
  orderings: [
    {
      title: "Utstillingsår",
      name: "exhibitionYearDesc",
      by: [{ field: "exhibitionFirstDay", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "exhibitionName",
      startDate: "exhibitionFirstDay",
      spaceName: "spaceName",
    },
    prepare(selection) {
      const { title, startDate, spaceName } = selection;
      const subtitle = `${startDate?.substring(0, 4) ?? ""}: ${
        spaceName?.no ?? ""
      }`;
      return {
        title: title.no,
        subtitle,
      };
    },
  },
});
