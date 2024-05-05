import groq from 'groq'
import { dataClient } from '../cms-integration/data.client'
import type { ExhibitionDto } from './exhibition.dto'

export async function getVisibleExhibitions(): Promise<ExhibitionDto[]> {
  const exhibitionQuery = groq`*[_type == "exhibition" && visibility]{
  'exhibitionName': {
    'no': exhibitionName.no,
    'en': exhibitionName.en
  },
  'spaceName': {
    'no': spaceName.no,
    'en': spaceName.en
  },
  exhibitionFirstDay,
  type,
}
| order(exhibitionFirstDay desc)`
  const exhibitions = await dataClient.fetch<ExhibitionDto[]>(exhibitionQuery)
  return exhibitions ?? []
}
