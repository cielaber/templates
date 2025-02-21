import { useTranslation } from '@/i18n'
import DeviceGrid from '@/components/DeviceGrid'
import type { Language } from '@/i18n/settings'

export default async function DevicesPage(props: { params: Promise<{ lng: Language }> }) {
  const params = await props.params
  const { lng } = params
  const { t } = await useTranslation(lng)

  return (
    <div className="p-8">
      <h1 className="mb-8 text-4xl font-bold">{t('deviceManagement')}</h1>
      <DeviceGrid lng={lng} />
    </div>
  )
}
