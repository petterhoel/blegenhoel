import type { ExhibitionDto } from './exhibition.dto'
import type { ExhibitionVm } from './exhibition.vm'

const noMap = new Map([
  ['separatutstilling', 'Separatutstilling'],
  ['duo-utstilling', 'Duo-utstilling'],
  ['trio-utstilling', 'Trio-utstilling'],
  ['gruppeutstilling', 'Gruppeutstilling'],
])

const enMap = new Map([
  ['separatutstilling', 'Solo show'],
  ['duo-utstilling', 'Duo show'],
  ['trio-utstilling', 'Trio show'],
  ['gruppeutstilling', 'Group show'],
])

const showTypes = {
  no: noMap,
  en: enMap,
}

const translateShowType = (key: string, lang: 'no' | 'en'): string => {
  if (showTypes[lang].has(key)) {
    return showTypes[lang].get(key) ?? ''
  }
  return ''
}

export const toVm = (dto: ExhibitionDto, lang: 'no' | 'en'): ExhibitionVm => {
  const { type, spaceName, exhibitionName, exhibitionFirstDay } = dto
  return {
    name: exhibitionName[lang].trim(),
    year: exhibitionFirstDay.substring(0, 4).trim(),
    space: spaceName[lang].trim(),
    type: translateShowType(type, lang).trim(),
  }
}
