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
}

export const generateMenu = async (
  language: I18nKey,
  currentPath: string
): Promise<{
  menuItems: Array<MenyItem | MenuGroupHeading>
  languageItems: {
    href: string
    text: string
    heading: string
  }
}> => {
  const meny = await getGalleryMenuItems()

  if (!meny) {
    throw Error('Klarte ikke hente menyinfo for gallerier fra cms')
  }

  const galleryItems =
    meny.galleryList?.map(({ galleryName, slug }) => {
      const href = `/${language}/galleri/${slug}`
      return {
        href,
        text: galleryName[language],
        active: href === currentPath,
        type: 'href' as const,
      }
    }) ?? []

  const langToggleHref = currentPath.startsWith('/no')
    ? `/en${currentPath.substring(3)}`
    : `/no${currentPath.substring(3)}`
  const omArbeideneHref = `/${language}/om-arbeidene`
  const bioHref = `/${language}/biografi`

  return {
    languageItems: {
      heading: language === 'no' ? 'View in' : 'Se siden på',
      href: langToggleHref,
      text: language === 'no' ? 'English' : 'Norsk',
    },
    menuItems: [
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
    ],
  }
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
