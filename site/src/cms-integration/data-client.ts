import { createClient } from '@sanity/client'
import { sanityConfig } from './sanity-config'

const { projectId, dataset, apiVersion, useCdn, token } = sanityConfig

export const dataClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn,
})
