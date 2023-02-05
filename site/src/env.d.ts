/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE_TITLE_SUFFIX: string
  readonly SANITY_PROJECT_ID: string
  readonly SANITY_DATASET: string
  readonly SANITY_TOKEN: string
  readonly SANITY_API_VERSION: string
  readonly SANITY_USE_CDN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
