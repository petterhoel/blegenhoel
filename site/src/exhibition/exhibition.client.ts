import type { ExhibitionDto } from "./exhibition.dto";
import { dataClient } from "../cms-integration/data.client";

export async function getVisibleExhibitions(): Promise<ExhibitionDto[]> {
  const query = `*[_type == "exhibition" && visibility]{
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
| order(exhibitionFirstDay desc)`;
  const exhibitions = await dataClient.fetch<ExhibitionDto[]>(query);
  return exhibitions ?? [];
}
