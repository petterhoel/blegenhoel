export const sanityConfig = {
  projectId: '2uvu00qu',
  dataset: import.meta.env.SANITY_DATASET,
  useCdn: import.meta.env.SANITY_USE_CDN?.toLowerCase() === 'true',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: '',
}
