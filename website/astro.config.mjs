import { defineConfig } from 'astro/config'
import sanity from 'astro-sanity'

const sanityConfig = {
    projectId: '2uvu00qu',
    dataset: 'staging',
    useCdn: true,
}

// https://astro.build/config
export default defineConfig({
    integrations: [sanity(sanityConfig)],
})
