import groq from 'groq'
import type { BioQueryResult } from '../cms-integration/cms-types'
import { dataClient } from '../cms-integration/data.client'

export async function getBiographyAsync() {
  const bioQuery = groq`coalesce(*[_type == "biography"][0]{
  'biography': { 
      'no': coalesce(biography.no, ""), 
      'en': coalesce(biography.en, "") 
    }
  },
  'result-error')`
  const bio = await dataClient.fetch<BioQueryResult>(bioQuery)
  if (bio === 'result-error') {
    throw new Error('Missing bio info')
  }
  return bio
}
