import { defineField, defineType } from "sanity";

export const seo = defineType({
    name: `seo`,
    type: `document`,
    title: `Googleinfo`,
    fields: [
        defineField({
            name: `helperText`,
            type: `text`,
            title:`Hva er dette?`,
            rows: 2,
            readOnly: true,
            initialValue: `Dette er en tekst som google viser frem når du du dukker opp i søkeresultater`
        }),
        defineField({
            name: `description`,
            type: `text`,
            title:`Generell beskrivelse av nettsiden`
        }),
        defineField({
            name: `helperText2`,
            type: `text`,
            title:`Hva er dette?`,
            rows: 2,
            readOnly: true,
            initialValue: `Dette er nøkkelord som google bruker for å skjønne seg på siden din. Separer nøkkelordene med mellomrom. Feks: art abstract painting`
        }),
        defineField({
            name: `keywords`,
            type: `text`,
            title:`Nøkkelord for nettsiden`
        })
    ]
})