import groq from "groq";
import type { SeoQueryResult } from "../cms-integration/cms-types.ts";
import { dataClient } from "../cms-integration/data.client";

export async function getSeoAsync() {
  const seoQuery = groq`coalesce(*[_type == "seo"][0]{keywords, description}, 'result-error')`;
  return await dataClient.fetch<SeoQueryResult>(seoQuery);
}
