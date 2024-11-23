import { type ClientConfig, createClient } from '@sanity/client'

export const sanityConfig: ClientConfig = {
  projectId: '2uvu00qu',
  dataset: 'test',
  useCdn: false,
  perspective: 'published',
  apiVersion: '2024-11-22', // use current UTC date - see "specifying API version"!
  token: 'ligger i 1password',
}
const dataClient = createClient(sanityConfig)

// delete by id
dataClient.delete('gallery')
  .catch(console.log)
  .then(console.log)