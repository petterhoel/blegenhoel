import { defaultLanguage, uiText } from './ui'

export const getLangFromUrl = (url: URL) => {
  const [, lang] = url.pathname.split('/')
  if (lang in uiText) {
    return lang as keyof typeof uiText;
  }
  return defaultLanguage;
}

export const getUrlWithLang = (url: URL) => {
  if (url.pathname.startsWith(`/${defaultLanguage}`)) {
    return url.pathname.replace(`/${defaultLanguage}`, `/en`)
  }
  return url.pathname.replace(`/en`, `/${defaultLanguage}`)
}

export const useTranslation = (lang: keyof typeof uiText) => {
  return function t(key: keyof typeof uiText[typeof defaultLanguage]){

    // @ts-ignore
    return uiText[lang][key] || uiText[defaultLanguage][key]
  }
}
