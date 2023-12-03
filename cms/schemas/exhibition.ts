import { defineField, defineType } from 'sanity'

const exhibitionYearOptions = () => {
  const startyear = new Date('2012-01-01T00:00:00').getFullYear();

  const currentYear = new Date().getFullYear()
  const futureOffsett = 3;
  const stopYear = currentYear + futureOffsett


  let years = []
  for (let i = startyear; i <= stopYear; i++) {
    years.push(i.toString())
  }
  return years.reverse()
}

const exhibitionTypes = [
  'separatutstilling',
  'duo-utstilling',
  'trio-utstilling',
  'gruppeutstilling',
]

export const exhibition = defineType({
  name: 'exhibition',
  title: 'Utstillinger',
  type: 'document',
  fields: [
    defineField({
      name: 'exhibitionName',
      title: 'Navn',
      description: 'Hva het utstillingen?',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'visibility',
      title: 'Synlighet',
      description: 'Skal utstillingen listes opp på nettsiden?',
      initialValue: true,
      type: 'boolean',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'spaceName',
      title: 'Utstillingssted',
      description: 'Hvor fant utstillingen sted? (feks: MoMA, New York)',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      type: "string",
      name: "exhibitionYear",
      title: "År",
      initialValue: new Date().getFullYear().toString(),
      description: 'Hvilket år var utstillingen?',
      options: {
        list: exhibitionYearOptions(),
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      type: "string",
      name: "type",
      title: "Utstillingstype",
      initialValue: '',
      description: 'Hva slags utstilling var det?',
      options: {
        list: exhibitionTypes,
      }
    })
  ],
  orderings: [
    {
      title: 'Utstillingsår',
      name: 'exhibitionYearDesc',
      by: [
        {field: 'exhibitionYear', direction: 'desc'}
      ]
    },
  ],
  preview: {
    select: {
      title: 'exhibitionName',
      year: 'exhibitionYear',
      space: 'spaceName'
    },
    prepare(selection) {
      const { title, year, space } = selection
      return {
        title: title,
        subtitle: `${year}: ${space}`,
      }
    },
  },
})


