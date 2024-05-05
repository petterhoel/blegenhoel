import type { I18nString } from '../i18n/i18n.string.dto.ts'

export type utstillingstype =
  | 'separatutstilling'
  | 'trio-utstilling'
  | 'duo-utstilling'
  | 'gruppeutstilling'

export interface ExhibitionDto {
  exhibitionName: I18nString
  spaceName: I18nString
  exhibitionFirstDay: string
  type: utstillingstype
}
