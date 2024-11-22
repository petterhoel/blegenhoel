export const sanityConfig: SanityConfig = {
  projectId: '2uvu00qu',
  dataset: import.meta.env?.SANITY_DATASET ?? '',
  useCdn: false,
  perspective: 'published',
  apiVersion: '2024-11-22', // use current UTC date - see "specifying API version"!
  token: '',
}

interface SanityConfig {
  projectId: string
  dataset: string
  useCdn: boolean
  perspective: 'published'
  apiVersion: string // use current UTC date - see "specifying API version"!
  token: string
}
