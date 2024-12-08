import { defineField, defineType } from 'sanity'

export const seo = defineType({
  name: 'seo',
  type: 'document',
  title: 'Googleinfo',
  fields: [
    defineField({
      name: 'description',
      type: 'localeText',
      description:
        'Dette er en tekst som google viser frem når nettsiden din dukker opp i søkeresultater',
      title: 'Generell beskrivelse av nettsiden',
    }),
    defineField({
      name: 'keywords',
      type: 'localeText',
      description:
        'Dette er nøkkelord som søkemotorer bruker for å skjønne seg på siden din. Separer nøkkelordene med mellomrom. Feks: art abstract painting',
      initialValue: 'Øystein Blegen Hoel painting',
      title: 'Nøkkelord for nettsiden',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Søkemotor synlighet',
        subtitle:
          'Informasjon som søkemotorer (google, bing etc) bruker for i sine søkeresultater',
      }
    },
  },
})
