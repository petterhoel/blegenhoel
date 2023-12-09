import type { ExhibitionDto } from './exhibition.dto'
import { toVm } from './exhibition.util'
import { describe, expect, test } from 'vitest'
const data : ExhibitionDto[] = [
  {
  exhibitionName: { no: 'vindmotvind', en: 'Wind and Headwind' },
  spaceName: { no: 'S9 Galleri, Oslo', en: 'S9 Galleri, Oslo' },
  exhibitionFirstDay: '2017-01-01',
  type: 'separatutstilling'
},
  {
  exhibitionName: { no: 'CC Vest høstutstilling. Premiert utstiller', en: 'CC Vest fall show. Awarded artist' },
  spaceName: { no: 'Oslo', en: 'Oslo' },
  exhibitionFirstDay: '2012-01-02',
  type: 'gruppeutstilling'
},
  {
  exhibitionName: { no: 'Klassekampens kunstmesse', en: 'Klassekampens art exhibit' },
  spaceName: { no: 'Oslo', en: 'Oslo' },
  exhibitionFirstDay: '2018-01-01',
  type: 'gruppeutstilling'
}, {
  exhibitionName: { no: 'Natura+', en: 'Natura+' },
  spaceName: { no: 'Dalype Galleri, Oslo', en: 'Dalype Galleri, Oslo' },
  exhibitionFirstDay: '2014-01-01',
  type: 'separatutstilling'
},
  {
  exhibitionName: { no: 'Debut', en: 'Debut' },
  spaceName: { no: 'Dalype Galleri, Oslo', en: 'Dalype Galleri, Oslo' },
  exhibitionFirstDay: '2012-01-01',
  type: 'separatutstilling'
},
  {
  exhibitionName: { no: 'Hyllest til Østmarka', en: 'Østmarka tribute' },
  spaceName: { no: 'Bøler kirke, Oslo', en: 'Church of Bøler, Oslo' },
  exhibitionFirstDay: '2016-01-01',
  type: 'gruppeutstilling'
},
  {
  exhibitionName: { no: 'CoMa', en: 'CoMa' },
  spaceName: { no: 'S9 Galleri, Oslo', en: 'S9 Galleri, Oslo' },
  exhibitionFirstDay: '2020-01-01',
  type: 'duo-utstilling'
},
  {
  exhibitionName: { no: 'PURE RAW BLENDED', en: 'PURE RAW BLENDED' },
  spaceName: { no: 'S9 Galleri, Oslo ', en: 'S9 Gallery, Oslo ' },
  exhibitionFirstDay: '2023-01-02',
  type: 'separatutstilling'
},
  {
  exhibitionName: { no: 'Gjesteutstiller ', en: 'Selected showcase artist' },
  spaceName: { no: 'Zara Galleri, Oslo', en: 'Zara Galleri, Oslo' },
  exhibitionFirstDay: '2013-01-01',
  type: 'separatutstilling'
},
  {
  exhibitionName: { no: 'S9 Galleris 10-års jubileumsutstilling', en: 'S9 Galleri’s 10 year anniversary show' },
  spaceName: { no: 'Oslo', en: 'Oslo' },
  exhibitionFirstDay: '2019-01-01',
  type: 'gruppeutstilling'
},
  {
  exhibitionName: { no: 'Alt det vi ikke ser', en: 'The Things We Cannot See' },
  spaceName: { no: 'Kunstforeningen Verdens Ende, Tjøme', en: 'Art Association Verdens Ende, Tjøme' },
  exhibitionFirstDay: '2023-01-01',
  type: 'trio-utstilling'
}];

describe('exhibition util', () => {
  test('map riktig til norsk', () => {
    const { type, name, year, space } = toVm(data[0], 'no')

    expect(type).toBe('separatutstilling')
    expect(name).toBe('vindmotvind')
    expect(year).toBe('2017')
    expect(space).toBe('S9 Galleri, Oslo')
  })
  test('map riktig til engelsk', () => {
    const { type, name, year, space } = toVm(data[0], 'en')
    expect(type).toBe('solo show')
    expect(name).toBe('Wind and Headwind')
    expect(year).toBe('2017')
    expect(space).toBe('S9 Galleri, Oslo')
  })
});
