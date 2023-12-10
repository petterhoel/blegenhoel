import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { singletonTypes, structure } from './structure'
import { schemaTypes } from './schemas/index'

export const singletonSet = new Set(singletonTypes)

export const singletonActions = new Set([
  'publish',
  'discardChanges',
  'restore',
  'unpublish',
])

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
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonSet.has(schemaType)),
  },

  document: {
    // For singletonstyper (definert i `singletonTypes`), filtreres alle actions,
    // med unntak av dem som explisitt er nevnt i `singletonActions`
    actions: (input, context) =>
      singletonSet.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
