import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas/index'
import { deskStructure as structure } from './deskStructure'

// @ts-ignore
export const dataset = import.meta.env.SANITY_STUDIO_API_DATASET ?? ''
export const projectId = '2uvu00qu'

const name = 'default'
const title = 'Belgenhoel'
export default defineConfig({
  name,
  title,
  projectId,
  dataset,

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
