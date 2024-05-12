import { defineType, defineField } from 'sanity'

export const oldGallery = defineType({
  name: 'gallery',
  title: 'Gallerier',
  type: 'document',
  fields: [
    defineField({
      name: 'galleryImages',
      title: 'Verk i galleriet',
      description: 'Sorter, legg til eller fjern bilder',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'artwork' }] }],
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      name: 'galleryName',
      title: 'Navnet på galleriet',
      description: '(vises ikke noe sted)',
      type: 'string',
    }),
  ],
})

export const webGallery = defineType({
	name: 'web-gallery',
	title: 'Gallerier',
	type: 'document',
	fields: [
		defineField({
			name: 'galleryName',
			title: 'Navnet på galleriet',
			description: '(vises i menyen)',
			type: 'localeString',
		}),
		defineField({
			name: 'display',
			title: 'Skal vises på nettsiden',
			description: 'Her velger man om galleriet skal kunne vises på nettsiden',
			type: 'boolean',
		}),
		defineField({
			name: 'galleryImages',
			title: 'Verk i galleriet',
			description: 'Sorter, legg til eller fjern bilder',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'artwork' }] }],
			validation: (Rule) => Rule.unique(),
		}),
	],
	preview: {
		select: {
			title: 'galleryName',
			display: 'display',
		},
		prepare(selection) {
			const { title, display } = selection
			return {
				title: title?.no ?? "ingen tittel enda",
				subtitle: display ? "Vises på nettsiden" : "Vises ikke på nettsiden",
			}
		},
	},
})
