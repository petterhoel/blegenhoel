export default {
    name: 'artwork',
    type: 'document',
    title: 'Verk',
    fields: [
        {
            name: 'photo',
            type: 'artworkImage',
            title: 'Bilde',
        },
        {
            name: 'norskInfo',
            type: 'artworkInfo',
            title: 'Informasjon på norsk',
        },
        {
            name: 'engelskInfo',
            type: 'artworkInfo',
            title: 'Informasjon på engelsk',
        },
        {
            name: 'year',
            type: 'string',
            title: 'År produsert (ferdig)',
        },
    ],
}
