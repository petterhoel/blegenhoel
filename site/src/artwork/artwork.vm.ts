import type { ImageDimensions } from '../image/image.util.ts'

export interface ArtworkVm {
  title: string
  alt: string
  urls: string[]
  dimmenstions: string
  material: string
  year: string
  aspectRatio: ImageDimensions
}
