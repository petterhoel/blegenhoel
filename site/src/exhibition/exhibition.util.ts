import type { ExhibitionVm } from './exhibition.vm'
import type { ExhibitionDto } from './exhibition.dto'

const noMap = new Map([
  ['separatutstilling', "separatutstilling"],
  ['duo-utstilling', "duo-utstilling"],
  ['trio-utstilling', "trio-utstilling"],
  ['gruppeutstilling', "gruppeutstilling"],
]);

const enMap = new Map([
  ['separatutstilling', "solo show"],
  ['duo-utstilling', "duo show"],
  ['trio-utstilling', "trio show"],
  ['gruppeutstilling', "group show"],
]);


const showTypes = {
  no: noMap,
  en: enMap
}

const translateShowType = (key: string, lang: 'no' | 'en'): string => {
  if (showTypes[lang].has(key)) {
    return showTypes[lang].get(key) ?? ''
  }
  return ''
}


export const toVm = (dto: ExhibitionDto, lang: 'no' | 'en'): ExhibitionVm => {
    const {type, spaceName, exhibitionName, exhibitionFirstDay, } = dto;
    return {
      name: exhibitionName[lang],
      year: exhibitionFirstDay.substring(0,4),
      space: spaceName[lang],
      type: translateShowType(type, lang)
    }
}
