import type React from 'react'
import type { Metadata } from 'next'
import { Geist, Azeret_Mono as Geist_Mono } from 'next/font/google'
import './globals.scss'
import { fallbackLng, Language, languages } from '@/i18n/settings'
import { useTranslation } from '../../i18n'
import LocaleSwitcher from '@/components/locale/localeSwitcher'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '管理系统',
  description: '生产线管理系统',
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lng: Language }>
}) {
  let { lng } = await params
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng)

  return (
    <html lang={lng}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="flex w-full justify-between">
          <h1 className="text-4xl font-bold">{t('title')}</h1>
          <LocaleSwitcher className="relative" lng={lng} />
        </header>
        <main>{children}</main>
        <footer className="text-center text-sm text-gray-500">{t('footer')}</footer>
      </body>
    </html>
  )
}
