import type {languages} from "../i18n/ui.ts";
import {urlsForImage} from "../image/image.util.ts";
import type {ArtworkDto} from "./artwork.dto.ts";

export const mapArtworkDtoToVm = (dto: ArtworkDto, lang: keyof typeof languages) => {
	const { title, dimmenstions, year, photo, material } = dto
	return {
		title: title[lang],
		dimmenstions: dimmenstions,
		material: material[lang],
		year: year,
		alt: photo.alt[lang],
		urls: urlsForImage(photo.image),
	}
}
