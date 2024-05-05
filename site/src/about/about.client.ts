import groq from 'groq'
import { dataClient } from '../cms-integration/data.client.ts'

export async function getAboutWorksText() {
  const aboutQuery = groq`*[_type == "aboutWorks"][0]`
  return await dataClient.fetch(aboutQuery)
}
