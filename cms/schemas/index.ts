import { ImagesIcon } from '@sanity/icons'
import { TbCircleLetterU } from 'react-icons/tb'
import { aboutWorks } from './aboutWorks'
import { artwork } from './artwork'
import { artworkImage } from './artworkImage'
import { biography } from './biography'
import { exhibition } from './exhibition'
import { oldGallery, webGallery } from './gallery'
import { localeRichText } from './localeRichText'
import { localeString } from './localeString'
import { localeText } from './localeText'
import { richText } from './richText'
import { seo } from './seo'
import { publishedGalleries } from './publishedGalleries'

artwork.icon = ImagesIcon
oldGallery.icon = ImagesIcon
webGallery.icon = ImagesIcon
exhibition.icon = TbCircleLetterU
publishedGalleries.icon = ImagesIcon

export const schemaTypes = [
  aboutWorks,
  artwork,
  artworkImage,
  biography,
  exhibition,
  localeRichText,
  localeString,
  localeText,
  oldGallery,
  richText,
  seo,
  webGallery,
  publishedGalleries,
]
