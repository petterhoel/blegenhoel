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
import { gallery } from './gallery'
import { localeText } from './localeText'
import { exhibition } from './exhibition'

artwork.icon = ImagesIcon
gallery.icon = ImagesIcon
exhibition.icon = TbCircleLetterU

export const schemaTypes = [
  artwork,
  artworkImage,
  gallery,
  richText,
  biography,
  aboutWorks,
  localeString,
  localeRichText,
  localeText,
  seo,
  exhibition,
]
