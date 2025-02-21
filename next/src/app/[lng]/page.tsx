import Link from 'next/link'
import { useTranslation } from '@/i18n'
import { fallbackLng, Language, languages } from '@/i18n/settings'

export default async function Home(props: { params: Promise<{ lng: Language }> }) {
  const params = await props.params
  let { lng } = params
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng)

  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] items-center justify-items-center gap-1 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <Link href={`/${lng}/devices`} className="text-2xl text-blue-500 hover:underline">
        {t('deviceManagement')}
      </Link>
    </div>
  )
}
