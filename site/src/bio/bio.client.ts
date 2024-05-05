import groq from 'groq'
import type { BioQueryResult } from '../cms-integration/cms-types'
import { dataClient } from '../cms-integration/data.client'

export async function getBiography() {
  const bioQuery = groq`*[_type == "biography"][0]`
  return await dataClient.fetch<BioQueryResult>(bioQuery)
}
