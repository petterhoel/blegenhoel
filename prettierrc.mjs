/** @type {import('prettier').Config} */
export default {
  bracketSameLine: true,
  tabSize: 2,
  semi: false,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
}
