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

const isNotAlreadyInDisplayedGallery = async (elm ,context) => {
  const thisGallery = context.document.galleryImages?.map(elm => elm._ref) ?? [];
	const currentId = context.document._id;
	const client = context.getClient({ apiVersion: '2024-01-01'})
	const otherGalleries = await client.fetch(`*[_type == "web-gallery" && _id != '${currentId}']{
	display,
	'galleryImages': galleryImages[]->{
	_id,
	'name': title.no
	}, 
	'galleryName': galleryName.no}`)

	console.log(otherGalleries)
	const gall = otherGalleries
		.filter(g => g.display)
		.filter(og => thisGallery.some(id => og.galleryImages.some(i => i._id === id)))
		.map(g => ({
			galleryName : g.galleryName.trim(),
			imageNames: g.galleryImages.filter(i => thisGallery.includes(i._id)).map(i => i.name.trim())
		}))
  if (!gall.length){
		return true;
  }
	console.log(toValidationMessage(gall))

	return toValidationMessage(gall).join(', óg ');
}

const toValidationMessage = (dupes: {galleryName: string, imageNames: string []}[]) =>{
	return dupes.map(d => `"${d.imageNames.join('" og "')}" er allerede i galleriet "${d.galleryName}"`);
}

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
			validation: rule => rule.required()
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
			validation: (Rule) => [
				Rule.required(),
				Rule.unique(),
				Rule.custom(async (value, context) =>  await isNotAlreadyInDisplayedGallery(value, context))],
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
