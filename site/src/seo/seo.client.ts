import groq from "groq";
import { dataClient } from "../cms-integration/data.client";

export async function getSeoAsync() {
  const seoQuery = groq`*[_type == "seo"][0]`;
  const seo = await dataClient.fetch(seoQuery);
  return { description: seo?.description ?? "", keywords: seo?.keywords ?? "" };
}
