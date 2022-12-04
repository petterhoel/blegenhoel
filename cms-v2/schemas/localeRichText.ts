import { english, norsk } from './locales'

export const localeRichText = {
  title: 'Localized string',
  name: 'localeRichText',
  type: 'object',
  fields: [
    {
      title: 'Norsk',
      name: norsk,
      type: 'richText',
    },
    {
      title: 'Engelsk',
      name: english,
      type: 'richText',
    },
  ],
}
