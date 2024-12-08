// @ts-check
import eslintPluginAstro from 'eslint-plugin-astro'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...tseslint.configs.recommended
)
