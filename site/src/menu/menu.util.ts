import type { I18nKey } from '../i18n/i18n.string.dto.ts'
import { getGalleryMenuItems } from './menu.client.ts'

export const generateMenu = async (
  language: I18nKey,
  currentPath: string
): Promise<MenuStructure> => {
  const meny = await getGalleryMenuItems()

  if (!meny) {
    throw Error('Klarte ikke hente menyinfo for gallerier fra cms')
  }

  const galleryItems =
    meny.galleryList?.map(({ galleryName, slug }) => {
      const href = `/${language}/galleri/${slug}`
      return {
        href,
        text: galleryName[language] ?? '',
        active: isActive(href, currentPath),
        type: 'href' as const,
      }
    }) ?? []

  const langToggleHref = currentPath.startsWith('/no')
    ? `/en${currentPath.substring(3)}`
    : `/no${currentPath.substring(3)}`
  const omArbeideneHref = `/${language}/om-arbeidene`
  const bioHref = `/${language}/biografi`

  const isNorwegian = language === 'no'

  return {
    languageItems: {
      heading: isNorwegian ? 'View in' : 'Se siden på',
      href: langToggleHref,
      text: isNorwegian ? 'English' : 'Norsk',
    },
    menuItems: [
      {
        text: isNorwegian ? 'Gallerier' : 'Galleries',
        type: 'group-heading',
      },

      ...galleryItems,
      {
        text: isNorwegian ? 'Info' : 'About',
        type: 'group-heading',
      },
      {
        href: omArbeideneHref,
        text: isNorwegian ? 'Om arbeidene' : 'Artist statement',
        active: isActive(omArbeideneHref, currentPath),
        type: 'href',
      },
      {
        href: bioHref,
        text: isNorwegian ? 'Biografi' : 'Biogaphy',
        active: isActive(bioHref, currentPath),
        type: 'href',
      },
    ],
  }
}

const isActive = (href: string, currentPath: string) => {
  return (
    href ===
    (currentPath.endsWith('/')
      ? currentPath.substring(0, currentPath.length - 1)
      : currentPath)
  )
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
interface MenuStructure {
  menuItems: Array<MenyItem | MenuGroupHeading>
  languageItems: {
    href: string
    text: string
    heading: string
  }
}
