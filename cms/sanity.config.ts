import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas/index'
import { deskStructure as structure } from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'Blegenhoel',

  projectId: '2uvu00qu',
  dataset: 'staging',

  plugins: [
    deskTool({
      structure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
