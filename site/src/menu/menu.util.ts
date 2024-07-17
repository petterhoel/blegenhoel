import type {I18nKey} from "../i18n/i18n.string.dto.ts";
import {getGalleryMenuItems} from "./menu.client.ts";


const menuLang = {
	aboutText: {
		no: 'Om arbeidene',
		en: 'Artist statement'
	},
	bioText: {
		no: 'Biografi',
		en: 'Biogaphy'
	},
	languageToggleText: {
		no: 'English',
		en: 'Norsk',
	},
	languageToggleKey: {
		no: 'en',
		en: 'no',
	}
}

export const generateMenu = async (language: I18nKey, currentPath: string): Promise<Array<MenyItem| MenuGroupHeading>> => {

	const meny = await getGalleryMenuItems()

	if (!meny){
		throw Error('Klarte ikke hente menyinfo for gallerier fra cms');
	}

	const galleryItems = meny.menuGalleries?.map(({galleryName, slug}) =>({
		href: `/${language}/gallery/${slug}`,
		text: galleryName[language],
		active: `${language}/${slug}` === currentPath,
		type: 'href' as 'href'
	})) ?? [];

	const omArbeideneHref = `/${language}/om-arbeidene`
	const bioHref = `/${language}/biografi`

	console.log(currentPath)

	return [
		{
			text: language === 'no' ? 'Gallerier' : 'Galleries',
			type: 'group-heading'
		},
		...galleryItems,
		{
			text: language === 'no' ? 'Om' : 'About',
			type: 'group-heading'
		},
		{
			href: omArbeideneHref,
			text: menuLang.aboutText[language],
			active: omArbeideneHref === currentPath,
			type: 'href'
		},
		{
			href: bioHref,
			text: menuLang.bioText[language],
			active: bioHref === currentPath,
			type: 'href'
		},
		{
			href: `/${menuLang.languageToggleKey[language]}`,
			text: menuLang.languageToggleText[language],
			active: language === currentPath,
			type: 'href'
		}
	]
}

interface MenyItem {
	href: string;
	text: string;
	active: boolean;
	type: 'href'
}

interface MenuGroupHeading {
	text: string,
	type: 'group-heading'
}
