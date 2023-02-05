import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas/index'
import { deskStructure as structure, singletonTypes } from './deskStructure'

export const singletonSet = new Set(singletonTypes)

export const singletonActions = new Set([
  'publish',
  'discardChanges',
  'restore',
  'unpublish',
])

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
    templates: () => [],
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
