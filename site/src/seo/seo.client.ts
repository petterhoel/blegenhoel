import groq from 'groq'
import type { SeoQueryResult } from '../cms-integration/cms-types.ts'
import { dataClient } from '../cms-integration/data.client'

export async function getSeoAsync() {
  const seoQuery = groq`coalesce(*[_type == "seo"][0]{
    'keywords': coalesce(keywords, {'no': '', 'en': ''}), 
    'description': coalesce(description, {'no': '', 'en': ''}),
  }, 
  'result-error')`
  const seo = await dataClient.fetch<SeoQueryResult>(seoQuery)
  if (seo === 'result-error') {
    throw new Error('Missing SEO info')
  }
  return seo;
}
