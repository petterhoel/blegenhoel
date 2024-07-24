import type { languages } from '../i18n/ui.ts'
import { toDimmentionsAndUrls } from '../image/image.util.ts'
import type { ArtworkDto } from './artwork.dto.ts'

export const mapArtworkDtoToVm = (
  dto: ArtworkDto,
  lang: keyof typeof languages
) => {
  const { title, dimmenstions, year, photo, material } = dto
  const { urls, aspectRatio } = toDimmentionsAndUrls(photo.image)
  return {
    title: title[lang],
    dimmenstions: dimmenstions,
    material: material[lang],
    year: year,
    alt: photo.alt[lang],
    aspectRatio,
    urls,
  }
}
