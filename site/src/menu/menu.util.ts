import type { I18nKey } from '../i18n/i18n.string.dto.ts'
import { getGalleryMenuItems } from './menu.client.ts'

const menuLang = {
  aboutText: {
    no: 'Om arbeidene',
    en: 'Artist statement',
  },
  bioText: {
    no: 'Biografi',
    en: 'Biogaphy',
  },
  languageToggleText: {
    no: 'English',
    en: 'Norsk',
  },
  languageToggleKey: {
    no: 'en',
    en: 'no',
  },
}

export const generateMenu = async (
  language: I18nKey,
  currentPath: string,
): Promise<Array<MenyItem | MenuGroupHeading>> => {
  const meny = await getGalleryMenuItems()

  if (!meny) {
    throw Error('Klarte ikke hente menyinfo for gallerier fra cms')
  }

  const galleryItems =
    meny.menuGalleries?.map(({ galleryName, slug }) => {
      const href = `/${language}/galleri/${slug}`
      return {
        href,
        text: galleryName[language],
        active: href === currentPath,
        type: 'href' as const,
      }
    }) ?? []

  const currentPathToggleLang = currentPath.startsWith('/no')
    ? `/en${currentPath.substring(3)}`
    : `/no${currentPath.substring(3)}`
  const omArbeideneHref = `/${language}/om-arbeidene`
  const bioHref = `/${language}/biografi`

  return [
    {
      text: language === 'no' ? 'Gallerier' : 'Galleries',
      type: 'group-heading',
    },
    ...galleryItems,
    {
      text: language === 'no' ? 'Info' : 'About',
      type: 'group-heading',
    },
    {
      href: omArbeideneHref,
      text: menuLang.aboutText[language],
      active: omArbeideneHref === currentPath,
      type: 'href',
    },
    {
      href: bioHref,
      text: menuLang.bioText[language],
      active: bioHref === currentPath,
      type: 'href',
    },
    {
      text: language === 'no' ? 'Switch language' : 'Bytt språk',
      type: 'group-heading',
    },
    {
      href: currentPathToggleLang,
      text: menuLang.languageToggleText[language],
      active: false,
      type: 'href',
    },
  ]
}

interface MenyItem {
  href: string
  text: string
  active: boolean
  type: 'href'
}

interface MenuGroupHeading {
  text: string
  type: 'group-heading'
}
