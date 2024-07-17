import groq from "groq";
import type {MenuQueryResult} from "../cms-integration/cms-types.ts";
import {dataClient} from "../cms-integration/data.client.ts";

export async function getAllGalleries(): Promise<MenuQueryResult> {
	const menuQuery = groq`*[_type == "publishedGalleries"][0] {
  menuGalleries[]-> {
    galleryName {no, en},
    'slug' : gallerySlug.current
    }}`
	return await dataClient.fetch<MenuQueryResult>(menuQuery)
}

export async function getAllGalleryPaths(): Promise<string[]> {
	const menuQuery = groq`*[_type == "publishedGalleries"][0]{
  'slugs': menuGalleries[]->gallerySlug.current
}`
	const restult = await dataClient.fetch<{slugs : string[]} | null>(menuQuery)
	if (restult){
		return restult.slugs
	}
	return []
}
