import { createClient } from '@sanity/client'
import { sanityConfig } from './sanity.config'

export const dataClient = createClient(sanityConfig)
