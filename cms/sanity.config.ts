import { nbNOLocale } from '@sanity/locale-nb-no'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { NavBarWithBundleChecker } from './navbar/navbar'
import { schemaTypes } from './schemas/index'
import { singletonTypes, structure } from './structure'

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
    structureTool({
      structure,
    }),
    visionTool(),
    nbNOLocale(),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonSet.has(schemaType)),
  },
  studio: {
    components: {
      navbar: NavBarWithBundleChecker,
    },
  },
  document: {
    // For singletonstyper (definert i `singletonTypes`), filtreres alle actions,
    // med unntak av dem som explisitt er nevnt i `singletonActions`
    actions: (input, context) =>
      singletonSet.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
  scheduledPublishing: {
    enabled: false,
  },
  tasks: {
    enabled: false,
  },
})
