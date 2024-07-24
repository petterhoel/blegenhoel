import { defaultLanguage, uiText } from './ui'

export const getLangFromUrl = (url: URL) => {
  const [, lang] = url.pathname.split('/')
  if (lang && lang in uiText) {
    return lang as keyof typeof uiText
  }
  return defaultLanguage
}

export const useTranslation = (lang: keyof typeof uiText) => {
  return function t(key: keyof (typeof uiText)[typeof defaultLanguage]) {
    // @ts-expect-error we want to be dynamic here
    return uiText[lang][key] || uiText[defaultLanguage][key]
  }
}
