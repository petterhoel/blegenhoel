import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import type { I18nString } from '../i18n/i18n-string.dto'

export interface ArtworkDto {
  dimmenstions: string
  material: I18nString
  photo: { alt: I18nString; image: SanityImageSource }
  title: I18nString
  year: string
}
