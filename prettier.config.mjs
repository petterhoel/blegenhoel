/** @type {import('prettier').Config} */
export default {
  bracketSameLine: true,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
