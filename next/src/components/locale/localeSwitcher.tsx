'use client'

import type React from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Language, languages } from '@/i18n/settings'

export default function LocaleSwitcher({ className, lng }: { className?: string; lng?: Language }) {
  const router = useRouter()
  const currentPathname = usePathname()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value
    const currentPath = currentPathname.split('/').slice(2).join('/')
    router.push(`/${newLocale}/${currentPath}`)
  }

  return (
    <select className={className} value={lng} onChange={handleChange}>
      {languages.map((locale) => (
        <option key={locale} value={locale}>
          {locale === 'en' ? 'English' : '中文'}
        </option>
      ))}
    </select>
  )
}
