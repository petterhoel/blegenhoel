import { english, norsk } from "./locales";

export const localeString = {
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  fields: [
    {
      title: 'Norsk',
      name: norsk,
      type: 'string',
    },
    {
      title: 'Engelsk',
      name: english,
      type: 'string',
    },
  ],
}
