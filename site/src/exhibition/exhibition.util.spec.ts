import { describe, expect, test } from "vitest";
import type { ExhibitionDto } from "./exhibition.dto";
import { toVm } from "./exhibition.util";

const exhibition1: ExhibitionDto = {
  exhibitionName: { no: "vindmotvind", en: "Wind and Headwind" },
  spaceName: { no: "S9 Galleri, Oslo", en: "S9 Galleri, Oslo" },
  exhibitionFirstDay: "2017-01-01",
  type: "separatutstilling",
};

const data: ExhibitionDto[] = [
  {
    exhibitionName: {
      no: "CC Vest høstutstilling. Premiert utstiller",
      en: "CC Vest fall show. Awarded artist",
    },
    spaceName: { no: "Oslo", en: "Oslo" },
    exhibitionFirstDay: "2012-01-02",
    type: "gruppeutstilling",
  },
  {
    exhibitionName: {
      no: "Klassekampens kunstmesse",
      en: "Klassekampens art exhibit",
    },
    spaceName: { no: "Oslo", en: "Oslo" },
    exhibitionFirstDay: "2018-01-01",
    type: "gruppeutstilling",
  },
  {
    exhibitionName: { no: "Natura+", en: "Natura+" },
    spaceName: { no: "Dalype Galleri, Oslo", en: "Dalype Galleri, Oslo" },
    exhibitionFirstDay: "2014-01-01",
    type: "separatutstilling",
  },
  {
    exhibitionName: { no: "Debut", en: "Debut" },
    spaceName: { no: "Dalype Galleri, Oslo", en: "Dalype Galleri, Oslo" },
    exhibitionFirstDay: "2012-01-01",
    type: "separatutstilling",
  },
  {
    exhibitionName: { no: "Hyllest til Østmarka", en: "Østmarka tribute" },
    spaceName: { no: "Bøler kirke, Oslo", en: "Church of Bøler, Oslo" },
    exhibitionFirstDay: "2016-01-01",
    type: "gruppeutstilling",
  },
  {
    exhibitionName: { no: "CoMa", en: "CoMa" },
    spaceName: { no: "S9 Galleri, Oslo", en: "S9 Galleri, Oslo" },
    exhibitionFirstDay: "2020-01-01",
    type: "duo-utstilling",
  },
  {
    exhibitionName: { no: "PURE RAW BLENDED", en: "PURE RAW BLENDED" },
    spaceName: { no: "S9 Galleri, Oslo ", en: "S9 Gallery, Oslo " },
    exhibitionFirstDay: "2023-01-02",
    type: "separatutstilling",
  },
  {
    exhibitionName: { no: "Gjesteutstiller ", en: "Selected showcase artist" },
    spaceName: { no: "Zara Galleri, Oslo", en: "Zara Galleri, Oslo" },
    exhibitionFirstDay: "2013-01-01",
    type: "separatutstilling",
  },
  {
    exhibitionName: {
      no: "S9 Galleris 10-års jubileumsutstilling",
      en: "S9 Galleri’s 10 year anniversary show",
    },
    spaceName: { no: "Oslo", en: "Oslo" },
    exhibitionFirstDay: "2019-01-01",
    type: "gruppeutstilling",
  },
  {
    exhibitionName: {
      no: "Alt det vi ikke ser",
      en: "The Things We Cannot See",
    },
    spaceName: {
      no: "Kunstforeningen Verdens Ende, Tjøme",
      en: "Art Association Verdens Ende, Tjøme",
    },
    exhibitionFirstDay: "2023-01-01",
    type: "trio-utstilling",
  },
];

describe("Exhibition mappings", () => {
  test("map riktig til norsk", () => {
    const { type, name, year, space } = toVm(exhibition1, "no");
    expect(type).toEqual("Separatutstilling");
    expect(name).toEqual("vindmotvind");
    expect(year).toEqual("2017");
    expect(space).toEqual("S9 Galleri, Oslo");
  });
  test("map riktig til engelsk", () => {
    const { type, name, year, space } = toVm(exhibition1, "en");
    expect(type).toBe("Solo show");
    expect(name).toBe("Wind and Headwind");
    expect(year).toBe("2017");
    expect(space).toBe("S9 Galleri, Oslo");
  });

  data.forEach((exhibit) => {
    test(`${exhibit.exhibitionName.en} map riktig til engelsk`, () => {
      const { name, space } = toVm(exhibit, "en");
      expect(name).toBe(exhibit.exhibitionName.en.trim());
      expect(space).toBe(exhibit.spaceName.en.trim());
    });

    test(`${exhibit.exhibitionName.no} map riktig til norsk`, () => {
      const { name, space } = toVm(exhibit, "no");
      expect(name).toBe(exhibit.exhibitionName.no.trim());
      expect(space).toBe(exhibit.spaceName.no.trim());
    });
  });
});
