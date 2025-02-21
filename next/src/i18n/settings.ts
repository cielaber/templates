export const fallbackLng = 'en'
export const languages = [fallbackLng, 'zh']
export const defaultNS = 'common'
export const cookieName = 'i18next'
export type Language = (typeof languages)[number]

export function getOptions(lng: Language = fallbackLng, ns: string | string[] = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}
