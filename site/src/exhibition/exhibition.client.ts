import { dataClient } from '../cms-integration/data.client'
import type { I18nString } from '../i18n/i18n.string.dto'

export async function getVisibleExhibitions(): Promise<Exhibition[]> {
  const query = `*[_type == "exhibition" && visibility]`
  const exhibitions = await dataClient.fetch<Exhibition[]>(query)
  return exhibitions ?? [];
}

export interface Exhibition {
  dimmenstions: string
  exhibitionBame: I18nString
  spaceName: I18nString
  exhibitionFirstDay: string
  type: 'separatutstilling' | 'trio-utstilling' | 'duo-utstilling' | 'gruppe-utstilling';
}
