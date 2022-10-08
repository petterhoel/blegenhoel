import sanityClient from '@sanity/client'
import { sanityConfig } from './sanity-config'

const { projectId, dataset, apiVersion, useCdn, token } = sanityConfig

export const dataClient = sanityClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn,
})
