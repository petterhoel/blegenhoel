import type { LocaleStringVm } from '../cms-integration/locale-string.vm.ts'
import type { ArtworkImage } from '../cms-integration/cms-types.ts'

export interface ArtworkDto {
  title: LocaleStringVm
  material: LocaleStringVm
  year: string
  dimensions: string
  photo: ArtworkImage
}
