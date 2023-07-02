import {defineField, defineType} from "sanity";
import {english, norsk} from "./locales";

export const localeText = defineType({
    title: 'Localized text',
    name: 'localeText',
    type: 'object',
    fields: [
        defineField({
            title: 'Norsk',
            name: norsk,
            type: 'text',
        }),
        defineField({
            title: 'Engelsk',
            name: english,
            type: 'text',
        }),
    ],
})