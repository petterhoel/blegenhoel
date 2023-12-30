import { dataClient } from "../cms-integration/data.client";

export async function getSeoAsync() {
  const query = `*[_type == "seo"][0]`;
  const seo = await dataClient.fetch(query);
  return { description: seo?.description ?? "", keywords: seo?.keywords ?? "" };
}
