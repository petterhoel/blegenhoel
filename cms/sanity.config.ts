import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Blegenhoel',

  projectId: '2uvu00qu',
  dataset: 'staging',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
