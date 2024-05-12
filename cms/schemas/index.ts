import { ImagesIcon } from '@sanity/icons'
import { TbCircleLetterU } from 'react-icons/tb'
import { artwork } from './artwork'
import { artworkImage } from './artworkImage'
import { richText } from './richText'
import { biography } from './biography'
import { aboutWorks } from './aboutWorks'
import { localeString } from './localeString'
import { localeRichText } from './localeRichText'
import { seo } from './seo'
import { oldGallery, webGallery } from './gallery'
import { localeText } from './localeText'
import { exhibition } from './exhibition'

artwork.icon = ImagesIcon
oldGallery.icon = ImagesIcon
webGallery.icon = ImagesIcon
exhibition.icon = TbCircleLetterU

export const schemaTypes = [
  artwork,
  artworkImage,
	oldGallery,
	webGallery,
  richText,
  biography,
  aboutWorks,
  localeString,
  localeRichText,
  localeText,
  seo,
  exhibition,
]
