import { nbNOLocale } from '@sanity/locale-nb-no'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { NavBarWithBundleChecker } from './navbar/navbar'
import { schemaTypes } from './schemas'
import { singletonTypes, structure } from './structure'

export const singletonSet = new Set(singletonTypes)

export const singletonActions = new Set([
  'publish',
  'discardChanges',
  'restore',
  'unpublish',
])

// @ts-expect-error env not recognised
export const dataset = import.meta.env.SANITY_STUDIO_API_DATASET ?? ''
export const projectId = '2uvu00qu'

const name = 'default'
const title = `Belgenhoel ${dataset === 'production' ? '' : dataset}`.trim()
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
    comments: {
      enabled: false,
    },
    // For singletonstyper (definert i `singletonTypes`), filtreres alle actions,
    // med unntak av dem som explisitt er nevnt i `singletonActions`
    actions: (input, context) =>
      singletonSet.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
  releases: {
    enabled: false
  },
  scheduledPublishing: {
    enabled: false,
  },
  tasks: {
    enabled: false,
  },
})
